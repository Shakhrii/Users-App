import { useMutationCreateUser } from '@entities/user/model/queries';
import { Modal, Form, Space } from 'antd';
import { UserForm } from '../form/UserForm';
import { ButtonModal } from '../button/ButtonModal';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const CreateUserModal = ({ open, onClose }: Props) => {
  const [form] = Form.useForm();
  const createMutation = useMutationCreateUser();
  const disabled = createMutation.isPending;

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
      closable={!disabled}
      onOk={handleOk}
      confirmLoading={createMutation.isPending}
      okText="Создать"
      cancelText="Отмена"
      destroyOnHidden
      afterClose={() => form.resetFields()}
      footer={(_, { OkBtn }) => (
        <Space>
          <OkBtn />
          <ButtonModal onClick={onClose} disabled={disabled}>
            Отмена
          </ButtonModal>
        </Space>
      )}
    >
      <UserForm form={form} isEdit={false} onFinish={() => {}} />
    </Modal>
  );
};
