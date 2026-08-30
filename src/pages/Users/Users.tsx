import { Avatar, Spin, Alert, Card, Pagination } from 'antd';
import { LoadingOutlined, UserAddOutlined, EditOutlined } from '@ant-design/icons';
import { User, useUsersQuery } from '@entities/user';
import * as S from './Users.styled';
import dayjs from 'dayjs';
import { useState } from 'react';
import { CreateUserModal, EditUserModal } from '@features/user/ui/';
import Meta from 'antd/es/card/Meta';

const Users = () => {
  const pageSize = 9;
  const { data, isLoading, isError, error } = useUsersQuery();
  const [isOpenCreateUserForm, setOpenCreateUserForm] = useState(false);
  const [isOpenEditUserForm, setOpenEditUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = data?.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log(data?.length);

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
      <Pagination
        showLessItems
        onChange={(page) => setCurrentPage(page)}
        total={data.length}
        pageSize={pageSize}
        defaultCurrent={1}
        showSizeChanger={false}
      />
      <CreateUserModal open={isOpenCreateUserForm} onClose={closeCreateUserForm} />
      {selectedUser && (
        <EditUserModal
          open={isOpenEditUserForm}
          onClose={closeEditUserForm}
          initialValues={selectedUser}
        />
      )}
      <S.StyledList>
        {paginatedData?.map((user) => (
          <Card
            key={user.id}
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
    </S.Container>
  );
};

export default Users;
