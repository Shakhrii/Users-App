import { ReactNode } from 'react';
import * as S from './SubmitButton.styled';
import { Form, type FormInstance } from 'antd';

interface SubmitButtonProps {
  form: FormInstance;
  loading: boolean;
  children: ReactNode;
}

function SubmitButton({ form, loading, children }: SubmitButtonProps) {
  const [submittable, setSubmittable] = React.useState<boolean>(false);
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <S.StyledButton
      type="primary"
      htmlType="submit"
      disabled={!submittable || loading}
      loading={loading}
      iconPosition="end"
    >
      {children}
    </S.StyledButton>
  );
}

export default SubmitButton;
