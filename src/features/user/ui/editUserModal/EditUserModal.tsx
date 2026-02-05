import { useMutationDeleteUser, useMutationUpdateUser } from '@entities/user/model/queries';
import { Modal, Form, Space, Popconfirm, Button } from 'antd';
import { UserForm } from '../form/UserForm';
import { User } from '@entities/user';

type Props = {
  open: boolean;
  onClose: () => void;
  initialValues: User;
};

export const EditUserModal = ({ open, onClose, initialValues }: Props) => {
  const [form] = Form.useForm();
  const editMutation = useMutationUpdateUser();
  const deleteMutation = useMutationDeleteUser();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      editMutation.mutate(values, {
        onSuccess: onClose,
      });
    } catch {
      console.log('error');
    }
  };

  const handleDelete = async () => {
    try {
      const values = await form.validateFields();

      deleteMutation.mutate(values, {
        onSuccess: onClose,
      });
    } catch {
      console.log('error');
    }
  };

  return (
    <Modal
      title="Редактировать пользователя"
      open={open}
      onCancel={onClose}
      onOk={handleOk}
      confirmLoading={editMutation.isPending}
      okText="Сохранить"
      cancelText="Отмена"
      destroyOnHidden
      afterClose={() => form.resetFields()}
      footer={(_, { OkBtn, CancelBtn }) => (
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Popconfirm
            title="Удалить пользователя?"
            okText="Удалить"
            cancelText="Отмена"
            onConfirm={handleDelete}
          >
            <Button type="primary">Удалить</Button>
          </Popconfirm>

          <Space>
            <OkBtn />
            <CancelBtn />
          </Space>
        </Space>
      )}
    >
      <UserForm form={form} isEdit={true} initialValues={initialValues} onFinish={() => {}} />
    </Modal>
  );
};
