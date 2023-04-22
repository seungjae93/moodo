import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";

function Login() {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
}

export default Login;
