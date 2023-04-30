declare global {
  interface Window {
    daum: any;
  }
}

interface IAddr {
  address: string;
  zonecode: string;
}

export default function Addr() {
  const onClickAddr = () => {
    new window.daum.Postcode({
      oncomplete: function (data: IAddr) {
        console.log(data);
        (document.getElementById("addr") as HTMLInputElement).value =
          data.address;
        (document.getElementById("zipNo") as HTMLInputElement).value =
          data.zonecode;
        document.getElementById("addrDetail")?.focus();
      },
    }).open();
  };

  return (
    <>
      <input id="addr" type="text" readOnly onClick={onClickAddr} />
      <button onClick={onClickAddr}>검색</button>
      <input id="zipNo" type="text" readOnly />
      <input id="addrDetail" type="text" />
    </>
  );
}
