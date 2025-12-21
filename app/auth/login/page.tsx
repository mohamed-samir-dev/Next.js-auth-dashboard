import LoginForm from './components/LoginForm';

export default function Login() {

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        <LoginForm />

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Don&rsquo;t have an account?{' '}
            <a href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}