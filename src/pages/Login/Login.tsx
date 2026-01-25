import type { FormProps } from 'antd';
import { Form, Input } from 'antd';
import * as S from './Login.styled'

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


function Login() {
  return ( 
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      name="username"
      rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
    >
      <Input placeholder='Логин'/>
    </Form.Item>

    <Form.Item<FieldType>
      name="password"
      rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
    >
      <Input.Password placeholder='Пароль'/>
    </Form.Item>

    <Form.Item label={null}>
      <S.StyledButton type="primary" htmlType="submit">
        Войти
      </S.StyledButton>
    </Form.Item>
  </Form>
  );
}

export default Login;