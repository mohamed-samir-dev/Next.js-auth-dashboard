import AuthLayout from './components/AuthLayout';
import RegisterForm from './components/RegisterForm';

export default function Register() {
  return (
    <AuthLayout title="Create Account">
      <RegisterForm />
    </AuthLayout>
  );
}
