import { useState } from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";

declare global {
  interface Window {
    daum: any;
  }
}

interface IPostCode {
  address: string;
}

interface PostCodeProps {
  register?: any;
}

export default function PostCode({ register }: PostCodeProps) {
  const [addressDetail, setAddressDetail] = useState("");

  const onClickAddr = () => {
    new window.daum.Postcode({
      oncomplete: function (data: IPostCode) {
        (document.getElementById("addr") as HTMLInputElement).value =
          data.address;
        document.getElementById("addrDetail")?.focus();
      },
    }).open();
  };

  const onAddressDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddressDetail(value);
    const address = (document.getElementById("addr") as HTMLInputElement).value;
    const combinedAddress = `${address}${value}`;
    register("userBusinessLocation", { value: combinedAddress });
  };

  return (
    <>
      <PostCodeWrapper>
        <div className="inputButtonBox">
          <StInput id="addr" type="text" readOnly />
          <button className="postcodeBtn" onClick={onClickAddr}>
            검색
          </button>
        </div>
        <StInput
          id="addrDetail"
          type="text"
          placeholder="상세주소를 입력해주세요."
          value={addressDetail}
          onChange={onAddressDetailChange}
        />
      </PostCodeWrapper>
    </>
  );
}

const PostCodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .inputButtonBox {
    display: flex;
    gap: 10px;
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
  width: 100%;
  height: 33.6px;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #718096;
`;
