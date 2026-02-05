import React from 'react';
import { Form, FormProps } from 'antd';
import { StyledFormWrapper } from './StyledForm.styles';

type FormValues = Record<string, string>;

export const StyledForm = <T extends FormValues = FormValues>(props: FormProps<T>) => {
  return (
    <StyledFormWrapper>
      <Form<T> {...props} />
    </StyledFormWrapper>
  );
};
