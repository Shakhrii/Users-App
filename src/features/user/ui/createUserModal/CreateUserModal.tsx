import { useMutationCreateUser } from '@entities/user/model/queries';
import { Modal, Form } from 'antd';
import { UserForm } from '../form/UserForm';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CreateUserModal = ({ open, onClose }: Props) => {
  const [form] = Form.useForm();
  const createMutation = useMutationCreateUser();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      createMutation.mutate(values, {
        onSuccess: onClose,
      });
    } catch {
      console.log('error');
    }
  };

  return (
    <Modal
      title="Создать пользователя"
      open={open}
      onCancel={onClose}
      onOk={handleOk}
      confirmLoading={createMutation.isPending}
      okText="Создать"
      cancelText="Отмена"
      destroyOnHidden
    >
      <UserForm form={form} onFinish={() => {}} />
    </Modal>
  );
};
