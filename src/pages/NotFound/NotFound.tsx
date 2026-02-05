import { Button, Result } from 'antd';
import { useNavigate } from 'react-router';

function NotFound() {
  const navigation = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Извините, такой страницы не существует"
      extra={
        <Button type="primary" onClick={() => navigation('/')}>
          Back Home
        </Button>
      }
    />
  );
}

export default NotFound;
