import { useMutationDeleteUser, useMutationUpdateUser } from '@entities/user/model/queries';
import { Modal, Form, Space, Popconfirm } from 'antd';
import { UserForm } from '../form/UserForm';
import { User } from '@entities/user';
import { ButtonModal } from '../button/ButtonModal';

type Props = {
  open: boolean;
  onClose: () => void;
  initialValues: User;
};

export const EditUserModal = ({ open, onClose, initialValues }: Props) => {
  const [form] = Form.useForm();
  const editMutation = useMutationUpdateUser();
  const deleteMutation = useMutationDeleteUser();
  const disabled = editMutation.isPending || deleteMutation.isPending;

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
      footer={(_, { OkBtn }) => (
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Popconfirm
            title="Удалить пользователя?"
            okText="Удалить"
            cancelText="Отмена"
            onConfirm={handleDelete}
          >
            <ButtonModal disabled={disabled}>Удалить</ButtonModal>
          </Popconfirm>

          <Space>
            <OkBtn />
            <ButtonModal onClick={onClose} disabled={disabled}>
              Отмена
            </ButtonModal>
          </Space>
        </Space>
      )}
    >
      <UserForm form={form} isEdit={true} initialValues={initialValues} onFinish={() => {}} />
    </Modal>
  );
};
