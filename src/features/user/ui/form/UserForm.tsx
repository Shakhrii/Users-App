import { Form, FormInstance, Input } from 'antd';
import { User } from '@entities/user/model/types';

type Props = {
  form: FormInstance<User>;
  initialValues?: User;
  isEdit: boolean;
  onFinish: (values: User) => void;
};

export const UserForm = ({ form, initialValues, isEdit, onFinish }: Props) => {
  return (
    <Form<User> form={form} layout="vertical" initialValues={initialValues} onFinish={onFinish}>
      {isEdit && (
        <Form.Item label="id" name="id">
          <Input readOnly />
        </Form.Item>
      )}

      <Form.Item label="Имя" name="name" rules={[{ required: true, message: 'Введите имя' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Ссылка на аватар"
        name="avatar"
        rules={[
          { required: true, message: 'Введите ссылку' },
          { type: 'url', message: 'Введите корректный URL' },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
