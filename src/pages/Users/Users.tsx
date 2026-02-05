import { List, Avatar, Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { User, useUsersQuery } from '@entities/user';
import * as S from './Users.styled';
import dayjs from 'dayjs';
import { useState } from 'react';
import { CreateUserModal, EditUserModal } from '@features/user/ui/';

const Users = () => {
  const { data, isLoading, isError, error } = useUsersQuery();
  const [isOpenCreateUserForm, setOpenCreateUserForm] = useState(false);
  const [isOpenEditUserForm, setOpenEditUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const openCreateUserForm = () => {
    setOpenCreateUserForm(true);
  };

  const closeCreateUserForm = () => {
    setOpenCreateUserForm(false);
  };

  const closeEditUserForm = () => {
    setOpenEditUserForm(false);
    setSelectedUser(null);
  };

  const userClick = (user: User) => {
    setSelectedUser(user);
    setOpenEditUserForm(true);
  };

  if (isLoading) {
    return <Spin indicator={<LoadingOutlined spin />} size="large" />;
  }

  if (isError) {
    return <Alert type="error" message={(error as Error).message} />;
  }

  return (
    <S.Container>
      <CreateUserModal open={isOpenCreateUserForm} onClose={closeCreateUserForm} />
      {selectedUser && (
        <EditUserModal
          open={isOpenEditUserForm}
          onClose={closeEditUserForm}
          initialValues={selectedUser}
        />
      )}
      <List
        dataSource={data}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <S.ClickWrapper onClick={() => userClick(user)}>
                  <Avatar src={user.avatar} />
                </S.ClickWrapper>
              }
              title={<S.ClickWrapper onClick={() => userClick(user)}>{user.name}</S.ClickWrapper>}
              description={`Зарегистрирован ${dayjs(user.createdAt).format('DD:MM:YYYY')}`}
            />
          </List.Item>
        )}
      />
      <S.StyledButton type="primary" onClick={openCreateUserForm}>
        Создать пользователя
      </S.StyledButton>
    </S.Container>
  );
};

export default Users;
