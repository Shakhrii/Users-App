import { List, Avatar, Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useUsersQuery } from '@entities/user';
import * as S from './Users.styled';
import dayjs from 'dayjs';
import { useState } from 'react';
import { CreateUserModal } from '@features/user/ui/createUserModal/CreateUserModal';

const Users = () => {
  const { data, isLoading, isError, error } = useUsersQuery();
  const [isOpenCreateUserForm, setOpenCreateUserForm] = useState(false);

  const openCreateUserForm = () => {
    setOpenCreateUserForm(true);
  };

  const closeCreateUserForm = () => {
    setOpenCreateUserForm(false);
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
      <List
        dataSource={data}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={user.avatar} />}
              title={user.name}
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
