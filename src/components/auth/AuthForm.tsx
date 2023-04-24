import styled from "styled-components";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginApi } from "../../apis/axios";
import palette from "../../libs/styles/palette";
import Button from "../common/Button/Button";
import Input from "../common/Input";
import { WorningWord } from "../common/WorningWord";

const textMap = {
  login: "로그인",
  signup: "회원가입",
};
interface AuthFormProps {
  type: "login" | "signup";
}

interface AuthForm {
  id?: string;
  password?: string;
  passwordCheck?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
}

function AuthForm({ type }: AuthFormProps) {
  const text = textMap[type];
  const navigate = useNavigate();

  const loginAxios = async (formData: FormData): Promise<void> => {
    try {
      const { data }: AxiosResponse = await loginApi.login(formData);
      //console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  const { mutate } = useMutation(
    (formData: FormData) => loginApi.create(formData),
    {
      onSuccess: () => {
        alert("회원가입을 축하합니다!");
        navigate("/login");
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<AuthForm>({ mode: "onChange" });

  const onValid = (data: AuthForm) => {
    const formData = new FormData();
    if (type === "login") {
      formData.append("id", data?.id || "");
      formData.append("password", data?.password || "");
      loginAxios(formData);
    }
    if (type === "signup") {
      formData.append("email", data?.email || "");
      formData.append("id", data?.id || "");
      formData.append("name", data?.name || "");
      formData.append("password", data?.password || "");
      formData.append("passwordCheck", data?.passwordCheck || "");
      formData.append("phoneNumber", data?.phoneNumber || "");
      mutate(formData);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        {type === "login" && (
          <>
            <Input
              register={register("id")}
              autoComplete="id"
              label="아이디"
              name="id"
              type="text"
            />

            <Input
              register={register("password")}
              autoComplete="password"
              label="비밀번호"
              name="password"
              type="password"
            />
          </>
        )}
        {type === "signup" && (
          <>
            <Input
              register={register("id", {
                required: "필수 응답 항목입니다.",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
                  message: "영문, 숫자 조합 6~16자리",
                },
              })}
              autoComplete="id"
              label="아이디"
              placeholder="영문,숫자 조합 6~16자리"
              name="id"
              type="text"
            />
            <WorningWord color={errors.id}>{errors.id?.message}</WorningWord>
            <Input
              register={register("password", {
                required: "필수 응답 항목입니다.",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
                  message: "영문, 숫자 조합 8~16자리",
                },
              })}
              autoComplete="password"
              label="비밀번호"
              placeholder="영문,숫자 조합 8~16자리"
              name="password"
              type="password"
            />
            <WorningWord color={errors.password}>
              {errors.password?.message}
            </WorningWord>
            <Input
              register={register("passwordCheck", {
                required: true,
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "비밀번호가 다릅니다.";
                  }
                },
              })}
              autoComplete="passwordCheck"
              label="비밀번호 재확인"
              placeholder="비밀번호를 다시 입력해주세요"
              name="passwordCheck "
              type="password"
            />
            <WorningWord color={errors.passwordCheck}>
              {errors.passwordCheck?.message}
            </WorningWord>
            <Input
              register={register("name", {
                required: "필수 응답 항목입니다.",
              })}
              autoComplete="name"
              label="이름"
              placeholder="이름을 입력해주세요"
              name="name"
              type="text"
            />
            <WorningWord color={errors.name}>
              {errors.name?.message}
            </WorningWord>
            <Input
              register={register("email", {
                required: "이메일은 필수 입력 값입니다.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
              autoComplete="email"
              label="이메일"
              placeholder="이메일을 입력해주세요"
              name="email"
              type="text"
            />
            <WorningWord color={errors.email}>
              {errors.email?.message}
            </WorningWord>
            <Input
              register={register("phoneNumber", {
                required: "필수 응답 항목입니다.",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "휴대폰 번호 형식에 맞지 않습니다.",
                },
              })}
              autoComplete="phoneNumber"
              label="휴대전화"
              placeholder="핸드폰번호를 입력해주세요"
              name="phoneNumber"
              kind="phone"
            />
            <WorningWord color={errors.phoneNumber}>
              {errors.phoneNumber?.message}
            </WorningWord>
          </>
        )}
        <ButtonWithMarginTop
          type="submit"
          cyan
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <span>
            혹시 공인중개사님이신가요? 회원가입은{" "}
            <Link to="/signup">여기서</Link> 하세요.
          </span>
        ) : null}
      </Footer>
    </>
  );
}

export default AuthForm;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-weight: 400;
  font-size: 12px;

  a {
    color: ${palette.cyan[5]};
    text-decoration: underline;
    &:hover {
      color: ${palette.cyan[4]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
