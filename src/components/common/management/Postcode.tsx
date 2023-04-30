import { useState } from "react";
import DaumPostcode from "react-daum-postcode"; //추가

function Postcode() {
  //추가
  const [zipCode, setZipcode] = useState<string>("");
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>(""); // 추가
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const completeHandler = (data: any) => {
    console.log(data);
    setZipcode(data.zonecode);
    setRoadAddress(data.roadAddress);
    setIsOpen(false);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // 상세 주소검색 event
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  // 추가
  const clickHandler = () => {
    if (detailAddress === "") {
      alert("상세주소를 입력해주세요.");
    } else {
      console.log(zipCode, roadAddress, detailAddress);
    }
  };

  return (
    <div>
      <input value={zipCode} readOnly placeholder="우편번호" />
      <button onClick={toggle}>우편번호 검색</button>
      <br />
      <input value={roadAddress} readOnly placeholder="도로명 주소" />
      <br />
      <div>
        <DaumPostcode onComplete={completeHandler} />
      </div>
      <input
        type="text"
        onChange={changeHandler}
        value={detailAddress}
        placeholder="상세주소"
      />
      <br />
      <button onClick={clickHandler}>클릭</button>
    </div>
  );
}

export default Postcode;
