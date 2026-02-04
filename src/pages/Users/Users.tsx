import { List, Avatar, Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useUsersQuery } from '@entities/user';

const Users = () => {
  const { data, isLoading, isError, error } = useUsersQuery();

  if (isLoading) {
    return (
      <Spin indicator={<LoadingOutlined spin />} size="large" tip="Загрузка пользователей..." />
    );
  }

  if (isError) {
    return <Alert type="error" message={(error as Error).message} />;
  }

  return (
    <List
      dataSource={data}
      renderItem={(user) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={user.avatar} />}
            title={user.name}
            description={user.createdAt}
          />
        </List.Item>
      )}
    />
  );
};

export default Users;
