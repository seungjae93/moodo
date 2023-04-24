import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";
import Header from "../components/common/Header/Header";

function SignUp() {
  return (
    <>
      <Header />
      <AuthTemplate>
        <AuthForm type="signup" />
      </AuthTemplate>
    </>
  );
}
export default SignUp;
