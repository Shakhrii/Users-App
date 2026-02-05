import { useMutationDeleteUser, useMutationUpdateUser } from '@entities/user/model/queries';
import { Modal, Form, Space, Popconfirm } from 'antd';
import { UserForm } from '../form/UserForm';
import { User } from '@entities/user';
import { ButtonModal } from '../button/ButtonModal';
import { useNotifications } from '@shared/ui/notification/NotificationProvider';

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
  const { notify } = useNotifications();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      editMutation.mutate(values, {
        onSuccess: () => {
          onClose();
          notify('success', 'Пользователь успешно отредактирован');
        },
      });
    } catch {
      notify('error', 'Ошибка', 'Не удалось отредактировать пользователя');
    }
  };

  const handleDelete = async () => {
    try {
      const values = await form.validateFields();

      deleteMutation.mutate(values, {
        onSuccess: () => {
          onClose();
          notify('success', 'Пользователь удален');
        },
      });
    } catch {
      notify('error', 'Ошибка', 'Не удалось удалить пользователя');
    }
  };

  return (
    <Modal
      title="Редактировать пользователя"
      open={open}
      closable={!disabled}
      confirmLoading={editMutation.isPending}
      destroyOnHidden
      afterClose={() => form.resetFields()}
      footer={() => (
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Popconfirm
            title="Удалить пользователя?"
            okText="Удалить"
            cancelText="Отмена"
            onConfirm={handleDelete}
          >
            <ButtonModal disabled={disabled} loading={deleteMutation.isPending}>
              Удалить
            </ButtonModal>
          </Popconfirm>

          <Space>
            <ButtonModal
              onClick={handleOk}
              disabled={deleteMutation.isPending}
              loading={editMutation.isPending}
            >
              Сохранить
            </ButtonModal>
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
