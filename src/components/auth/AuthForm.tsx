import styled from "styled-components";
import { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { loginApi } from "../../apis/axios";
import { WorningWord } from "../common/WorningWord";
import palette from "../../libs/styles/palette";
import Button from "../common/Button/Button";
import Input from "../common/Input";

const textMap = {
  login: "로그인",
  signup: "회원가입",
};
interface AuthFormProps {
  type: "login" | "signup";
}

interface AuthForm {
  userId?: string;
  userPassword?: string;
  userPasswordCheck?: string;
  userName?: string;
  userEmail?: string;
  userPhoneNumber?: string;
}

function AuthForm({ type }: AuthFormProps) {
  const text = textMap[type];
  const navigate = useNavigate();

  const loginAxios = async (formData: FormData): Promise<void> => {
    try {
      const { data }: AxiosResponse = await loginApi.login(formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userKey", data.userKey);
      localStorage.setItem("approved", data.approved);
      localStorage.setItem("admin", data.admin);
      localStorage.setItem("userId", data.userId);
      setTimeout(() => {
        localStorage.clear();
      }, 3600000);
      alert("로그인 성공!");
      navigate("/profileEdit");
    } catch (error) {
      if (error instanceof AxiosError) {
        //커스텀 타입 가드,
        console.error(error.response?.data);
        const { status } = error?.response?.request;
        if (status === undefined || null) return;
        else if (status === 401)
          alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      }
    }
  };

  const { mutate } = useMutation(
    (formData: FormData) => loginApi.create(formData),
    {
      onSuccess: () => {
        // 성공적으로 회원가입이 완료되었을 때의 로직
        alert("회원가입을 축하합니다!");
        navigate("/");
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
      formData.append("userId", data?.userId || "");
      formData.append("userPassword", data?.userPassword || "");
      loginAxios(formData);
    }
    if (type === "signup") {
      formData.append("userEmail", data?.userEmail || "");
      formData.append("userId", data?.userId || "");
      formData.append("userName", data?.userName || "");
      formData.append("userPassword", data?.userPassword || "");
      formData.append("userPasswordCheck", data?.userPasswordCheck || "");
      formData.append("userPhoneNumber", data?.userPhoneNumber || "");
      mutate(formData);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid)} encType="multipart/form-data">
        {type === "login" && (
          <>
            <Input
              register={register("userId")}
              autoComplete="userId"
              label="아이디"
              placeholder="아이디를 입력해주세요."
              name="userId"
              type="text"
            />

            <Input
              register={register("userPassword")}
              autoComplete="userPassword"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              name="userPassword"
              type="password"
            />
          </>
        )}
        {type === "signup" && (
          <>
            <Input
              register={register("userId", {
                required: "필수 응답 항목입니다.",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
                  message: "영문, 숫자 조합 6~16자리",
                },
              })}
              autoComplete="userId"
              label="아이디"
              placeholder="영문,숫자 조합 6~16자리"
              name="userId"
              type="text"
            />
            <WorningWord color={errors.userId}>
              {errors.userId?.message}
            </WorningWord>
            <Input
              register={register("userPassword", {
                required: "필수 응답 항목입니다.",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
                  message: "영문, 숫자 조합 8~16자리",
                },
              })}
              autoComplete="userPassword"
              label="비밀번호"
              placeholder="영문,숫자 조합 8~16자리"
              name="userPassword"
              type="password"
            />
            <WorningWord color={errors.userPassword}>
              {errors.userPassword?.message}
            </WorningWord>
            <Input
              register={register("userPasswordCheck", {
                required: true,
                validate: (val) => {
                  if (watch("userPassword") !== val) {
                    return "비밀번호가 다릅니다.";
                  }
                },
              })}
              autoComplete="userPasswordCheck"
              label="비밀번호 재확인"
              placeholder="비밀번호를 다시 입력해주세요"
              name="userPasswordCheck"
              type="password"
            />
            <WorningWord color={errors.userPasswordCheck}>
              {errors.userPasswordCheck?.message}
            </WorningWord>
            <Input
              register={register("userName", {
                required: "필수 응답 항목입니다.",
              })}
              autoComplete="userName"
              label="이름"
              placeholder="이름을 입력해주세요"
              name="userName"
              type="text"
            />
            <WorningWord color={errors.userName}>
              {errors.userName?.message}
            </WorningWord>
            <Input
              register={register("userEmail", {
                required: "이메일은 필수 입력 값입니다.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
              autoComplete="userEmail"
              label="이메일"
              placeholder="이메일을 입력해주세요"
              name="userEmail"
              type="email"
            />
            <WorningWord color={errors.userEmail}>
              {errors.userEmail?.message}
            </WorningWord>
            <Input
              register={register("userPhoneNumber", {
                required: "필수 응답 항목입니다.",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "휴대폰 번호 형식에 맞지 않습니다.",
                },
              })}
              autoComplete="userPhoneNumber"
              label="휴대전화"
              placeholder="핸드폰번호를 입력해주세요"
              name="userPhoneNumber"
              type="text"
              kind="phone"
            />
            <WorningWord color={errors.userPhoneNumber}>
              {errors.userPhoneNumber?.message}
            </WorningWord>
          </>
        )}
        <StBtnWrapper>
          <Button.Primary type="submit" size="xLarge" fw="400" fs="20px">
            {text}
          </Button.Primary>
        </StBtnWrapper>
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

const StBtnWrapper = styled.div`
  padding-top: 5px;
`;
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
