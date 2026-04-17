import { Avatar, Spin, Alert, Card } from 'antd';
import { LoadingOutlined, UserAddOutlined, EditOutlined } from '@ant-design/icons';
import { User, useUsersQuery } from '@entities/user';
import * as S from './Users.styled';
import dayjs from 'dayjs';
import { useState } from 'react';
import { CreateUserModal, EditUserModal } from '@features/user/ui/';
import Meta from 'antd/es/card/Meta';

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
      <S.StyledButton type="primary" icon={<UserAddOutlined />} onClick={openCreateUserForm}>
        Добавить пользователя
      </S.StyledButton>
      <CreateUserModal open={isOpenCreateUserForm} onClose={closeCreateUserForm} />
      {selectedUser && (
        <EditUserModal
          open={isOpenEditUserForm}
          onClose={closeEditUserForm}
          initialValues={selectedUser}
        />
      )}
      <S.StyledList>
        {data.map((user) => (
          <Card
            style={{ width: 300 }}
            cover={<img draggable={false} alt="user" src={user.avatar} />}
            actions={[<EditOutlined key="edit" onClick={() => userClick(user)} />]}
          >
            <Meta
              avatar={<Avatar src={user.avatar} />}
              title={user.name}
              description={`Зарегистрирован ${dayjs(user.createdAt).format('DD:MM:YYYY')}`}
            />
          </Card>
        ))}
      </S.StyledList>
      {/* <List
        dataSource={data}
        renderItem={(user) => (
          <List.Item actions={[<EditOutlined key="edit" />, <DeleteOutlined key="delete" />]}>
            <S.StyledListItem
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
      /> */}
    </S.Container>
  );
};

export default Users;
