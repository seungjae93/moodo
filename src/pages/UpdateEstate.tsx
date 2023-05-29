import { useParams } from "react-router-dom";
import EstateListingForm from "../components/common/EstateListing/EstateListingForm";

function UpdateEstate() {
  const estateId = useParams().id;
  return <EstateListingForm estateId={estateId} isUpdate={true} />;
}
export default UpdateEstate;
