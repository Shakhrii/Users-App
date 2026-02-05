import type { FormProps } from 'antd';
import { Alert, Form, Input } from 'antd';
import { StyledForm } from '@shared/ui/index';
import { useNavigate } from 'react-router';
import * as S from './Login.styled';
import { useLoginMutation } from '@features/auth';
import { useNotifications } from '@shared/ui/notification/NotificationProvider';

type FieldType = {
  username?: string;
  password?: string;
};

function LoginPage() {
  const loginMutation = useLoginMutation();
  const [form] = Form.useForm<FieldType>();
  const { notify } = useNotifications();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    loginMutation.mutate(
      {
        username: values.username || '',
        password: values.password || '',
      },
      {
        onSuccess: () => {
          navigate('/users');
          notify('success', 'Вы вошли в личный кабинет', '');
        },
      },
    );
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
      validateTrigger="onChange"
      autoComplete="off"
    >
      <S.AlertWrapper>
        {loginMutation.isError && (
          <Alert
            type="error"
            message={loginMutation.error?.message}
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}
      </S.AlertWrapper>
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
