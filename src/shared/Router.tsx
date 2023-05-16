import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/common/Header/Header";
import PrivateRoutes from "./PrivateRoutes";
import ScrollToTop from "./ScrollToTop";

import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import ProfileEdit from "../pages/ProfileEdit";
import RealEstateListing from "../pages/RealEstateListing";
import RealEstateManage from "../pages/RealEstateManage";
import RealEstateDetail from "../pages/RealEstateDetail";
import MemberManage from "../pages/MemberManage";
import UpdateEstate from "../pages/UpdateEstate";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profileEdit" element={<ProfileEdit />} />
          <Route path="/realEstateListing" element={<RealEstateListing />} />
          <Route path="/realEstateManage" element={<RealEstateManage />} />
          <Route path="/realEstateManage/:id" element={<RealEstateDetail />} />
          <Route path="/update/:id" element={<UpdateEstate />} />
          <Route path="/memberManage" element={<MemberManage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
