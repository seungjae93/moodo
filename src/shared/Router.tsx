import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Header from "../components/common/Header/Header";
import ProfileEdit from "../pages/ProfileEdit";
import RealEstateListing from "../pages/RealEstateListing";
import RealEstateManage from "../pages/RealEstateManage";
function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
        <Route path="/realEstateListing" element={<RealEstateListing />} />
        <Route path="/realEstateManage" element={<RealEstateManage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
