import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";
import Header from "../components/common/Header/Header";
function Login() {
  return (
    <>
      <Header />
      <AuthTemplate>
        <AuthForm type="login" />
      </AuthTemplate>
    </>
  );
}

export default Login;
