import { useState } from "react";
import styled from "styled-components";
import palette from "../../../libs/styles/palette";

declare global {
  interface Window {
    daum: any;
  }
}

interface IListPostCode {
  address: string;
}

interface ListPostCodeProps {
  register: any;
}

export default function ListPostCode({ register }: ListPostCodeProps) {
  const [listAddressDetail, setListAddressDetail] = useState("");

  const onClickAddr = () => {
    new window.daum.Postcode({
      oncomplete: function (data: IListPostCode) {
        const address = data.address;
        (document.getElementById("listAddr") as HTMLInputElement).value =
          address;

        document.getElementById("listAddrDetail")?.focus();
        setListAddressDetail("");
      },
    }).open();
  };

  const onAddressDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setListAddressDetail(value);
    const listAddress = (
      document.getElementById("listAddr") as HTMLInputElement
    ).value;
    const combinedAddress = `${listAddress}`;
    register("addressOfProperty", {
      value: combinedAddress,
    });
  };

  return (
    <>
      <PostCodeWrapper>
        <div className="inputButtonBox">
          <StInput id="listAddr" type="text" readOnly />
          <button className="postcodeBtn" onClick={onClickAddr}>
            검색
          </button>
        </div>
        <StInput
          id="listAddrDetail"
          type="text"
          placeholder="상세주소를 입력해주세요."
          value={listAddressDetail}
          onChange={onAddressDetailChange}
        />
      </PostCodeWrapper>
    </>
  );
}

const PostCodeWrapper = styled.div`
  padding: 20px;
  width: 500px;
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
