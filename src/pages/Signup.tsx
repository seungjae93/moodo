import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";

function SignUp() {
  return (
    <>
      <AuthTemplate>
        <AuthForm type="signup" />
      </AuthTemplate>
    </>
  );
}
export default SignUp;
