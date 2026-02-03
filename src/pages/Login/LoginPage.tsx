import type { FormProps } from 'antd';
import { Alert, Form, Input } from 'antd';
import { StyledForm } from '@shared/ui/index';
import { useNavigate } from 'react-router';
import * as S from './Login.styled';
import { useLoginMutation } from '@features/auth';

type FieldType = {
  username?: string;
  password?: string;
};

function LoginPage() {
  const loginMutation = useLoginMutation();
  const [form] = Form.useForm<FieldType>();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    loginMutation.mutate(
      {
        username: values.username || '',
        password: values.password || '',
      },
      {
        onSuccess: () => {
          navigate('/users');
        },
        onError: (error) => {
          console.log(error.message);
        },
      },
    );
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const navigate = useNavigate();
  return (
    <StyledForm
      name="basic"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateTrigger="onChange"
      autoComplete="off"
    >
      {loginMutation.isError && (
        <Alert
          type="error"
          message={loginMutation.error?.message}
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}
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

      <Form.Item<FieldType> shouldUpdate label={null}>
        <S.StyledButton
          type="primary"
          htmlType="submit"
          disabled={loginMutation.isPending}
          loading={loginMutation.isPending}
          iconPosition="end"
        >
          Войти
        </S.StyledButton>
      </Form.Item>
    </StyledForm>
  );
}

export default LoginPage;
