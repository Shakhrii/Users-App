import { useMutationCreateUser } from '@entities/user/model/queries';
import { Modal, Form } from 'antd';
import { UserForm } from '../form/UserForm';
import { User } from '@entities/user';

type Props = {
  open: boolean;
  onClose: () => void;
  initialValues: User;
};

export const EditUserModal = ({ open, onClose, initialValues }: Props) => {
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
      afterClose={() => form.resetFields()}
    >
      <UserForm form={form} isEdit={true} initialValues={initialValues} onFinish={() => {}} />
    </Modal>
  );
};
