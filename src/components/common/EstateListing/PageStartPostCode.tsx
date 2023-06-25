import { useState } from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";
import flex from "../../../libs/styles/utilFlex";
import Button from "../Button/Button";
declare global {
  interface Window {
    daum: any;
  }
}

interface IPostCode {
  address: string;
  jibunAddress: string;
  autoJibunAddress: string;
}

interface PostCodeProps {
  register: any;
  setValue: any;
}

export default function PageStartPostCode({
  register,
  setValue,
}: PostCodeProps) {
  const [address, setAddress] = useState("");
  const [jibunAddress, setJibunAddress] = useState("");

  const onClickAddr = () => {
    setAddress("");
    setJibunAddress("");
    new window.daum.Postcode({
      oncomplete: function (data: IPostCode) {
        setAddress(data.address);
        let addressOfJibun = data.jibunAddress;

        if (addressOfJibun === "") {
          addressOfJibun = data?.autoJibunAddress;
        }

        setJibunAddress(addressOfJibun);

        setValue("startLocation", data.address);
        setValue("startLocationJibun", addressOfJibun);
        document.getElementById("startDetail")?.focus();
      },
    }).open();
  };
  return (
    <>
      <PostCodeWrapper>
        <div className="inputButtonBox">
          <StInput id="startaddr" type="text" readOnly value={address} />
          <StInput id="startJibun" type="text" readOnly value={jibunAddress} />

          <Button.Primary
            className="postcodeBtn"
            type="button"
            onClick={onClickAddr}
            fw="400"
            fs="14px"
          >
            검색
          </Button.Primary>
        </div>
        <StInput
          id="startDetail"
          type="text"
          placeholder="상세주소를 입력해주세요."
          name="startDetail"
          {...register("startDetail")}
        />
      </PostCodeWrapper>
    </>
  );
}

const PostCodeWrapper = styled.div`
  ${flex({ align: "", direction: "column" })}

  width: 600px;

  .inputButtonBox {
    ${flex({ gap: "10px" })}
    margin-bottom: 10px;
    .postcodeBtn {
      width: 60px;
      height: 33px;
      background-color: ${palette.gray[5]};
      color: white;
      border-radius: 5px;
    }
  }
`;
const StInput = styled.input`
  width: 50%;
  height: 33.6px;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #718096;
`;
