import { List, Avatar, Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useUsersQuery } from '@entities/user';
import * as S from './Users.styled';
import dayjs from 'dayjs';

const Users = () => {
  const { data, isLoading, isError, error } = useUsersQuery();

  if (isLoading) {
    return <Spin indicator={<LoadingOutlined spin />} size="large" />;
  }

  if (isError) {
    return <Alert type="error" message={(error as Error).message} />;
  }

  return (
    <S.Container>
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

      <S.StyledButton type="primary">Создать пользователя</S.StyledButton>
    </S.Container>
  );
};

export default Users;
