import type { FormProps } from 'antd';
import { Form, Input } from 'antd';
import { StyledForm } from '@shared/ui/index';
import { useNavigate } from 'react-router';
import * as S from './Login.styled';
import { useLoginMutation } from '@features/auth';
import { useNotifications } from '@shared/ui/notification/NotificationProvider';
import { useState } from 'react';
import SubmitButton from '@shared/ui/submit-button/SubmitButton';

type FieldType = {
  username?: string;
  password?: string;
};

function LoginPage() {
  const [error, setError] = useState<null | string>(null);
  const loginMutation = useLoginMutation();
  const [form] = Form.useForm<FieldType>();
  const values = Form.useWatch([], form);
  const { notify } = useNotifications();

  React.useEffect(() => {
    setError(null);
  }, [form, values]);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    loginMutation.mutate(
      {
        username: values.username || '',
        password: values.password || '',
      },
      {
        onSuccess: () => {
          setError(null);
          navigate('/users');
          notify('success', 'Вы вошли в личный кабинет', '');
        },
        onError: (error) => {
          setError(error.message);
        },
      },
    );
  };

  const navigate = useNavigate();
  return (
    <S.Container>
      <S.StyledTitle>Users&nbsp;App</S.StyledTitle>
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
        <S.StyledSubTitle>Авторизация</S.StyledSubTitle>
        <Form.Item<FieldType>
          name="username"
          rules={[
            { required: true, message: 'Пожалуйста, введите логин!' },
            { min: 5, message: 'Логин должен быть больше 4 символов!' },
          ]}
        >
          <Input placeholder="Логин" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[
            { required: true, message: 'Пожалуйста, введите пароль!' },
            { min: 5, message: 'Пароль должен быть больше 4 символов!' },
          ]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>

        <Form.Item<FieldType> shouldUpdate label={null}>
          <SubmitButton form={form} loading={loginMutation.isPending}>
            Войти
          </SubmitButton>
          <S.AlertWrapper>
            {error && (
              <S.StyledAlert type="error" message={error} showIcon style={{ marginBottom: 16 }} />
            )}
          </S.AlertWrapper>
        </Form.Item>
      </StyledForm>
    </S.Container>
  );
}

export default LoginPage;
