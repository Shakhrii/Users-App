import { Form, FormInstance, Input } from 'antd';
import { UserClient } from '@entities/user/model/types';

type Props = {
  form: FormInstance<UserClient>;
  initialValues?: UserClient;
  onFinish: (values: UserClient) => void;
};

export const UserForm = ({ form, initialValues, onFinish }: Props) => {
  return (
    <Form<UserClient>
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Form.Item label="Имя" name="name" rules={[{ required: true, message: 'Введите имя' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Ссылка на аватар"
        name="avatar"
        rules={[{ required: true, message: 'Введите ссылку' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
