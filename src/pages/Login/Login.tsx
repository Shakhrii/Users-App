import type { FormProps } from 'antd';
import { Form, Input } from 'antd';
import { StyledForm } from '@shared/ui/index';
import { useNavigate } from 'react-router';
import * as S from './Login.styled';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function Login() {
  const onFinish: FormProps<FieldType>['onFinish'] = () => {
    navigate('/users');
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const navigate = useNavigate();
  return (
    <StyledForm
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <S.StyledTitle>Авторизация</S.StyledTitle>
      <Form.Item<FieldType>
        name="username"
        rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
      >
        <Input placeholder="Логин" />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
      >
        <Input.Password placeholder="Пароль" />
      </Form.Item>

      <Form.Item<FieldType> label={null}>
        <S.StyledButton type="primary" htmlType="submit">
          Войти
        </S.StyledButton>
      </Form.Item>
    </StyledForm>
  );
}

export default Login;
