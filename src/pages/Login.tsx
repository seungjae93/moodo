import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import AuthForm from "../components/auth/AuthForm";
import AuthTemplate from "../components/auth/AuthTemplate";

function Login() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    queryClient.clear();
    if (localStorage.getItem("token")) navigate("/");
    else if (!!localStorage.getItem("token")) return;
  }, []);

  return (
    <>
      <AuthTemplate>
        <AuthForm type="login" />
      </AuthTemplate>
    </>
  );
}

export default Login;
