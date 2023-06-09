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
}

export default function PageStartPostCode({ register }: PostCodeProps) {
  const onClickAddr = () => {
    new window.daum.Postcode({
      oncomplete: function (data: IPostCode) {
        (document.getElementById("startLocation") as HTMLInputElement).value =
          data.address;

        const address = (
          document.getElementById("startLocation") as HTMLInputElement
        ).value;
        register("startLocation", { value: address });
        document.getElementById("addrDetail")?.focus();
      },
    }).open();
  };
  return (
    <>
      <PostCodeWrapper>
        <div className="inputButtonBox">
          <StInput id="startLocation" type="text" readOnly />
          {/* <StInput id="jibun" type="text" readOnly /> */}
          <Button.Primary
            className="postcodeBtn"
            onClick={onClickAddr}
            fw="400"
            fs="14px"
          >
            검색
          </Button.Primary>
        </div>
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
  width: 100%;
  height: 33.6px;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #718096;
`;
