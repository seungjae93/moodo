import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoadingSpinner from "../components/common/loading/LoadingSpinner";
import Header from "../components/common/Header/Header";
import PrivateRoutes from "./PrivateRoutes";
import ScrollToTop from "./ScrollToTop";

const Login = React.lazy(() => import("../pages/Login"));
const SignUp = React.lazy(() => import("../pages/Signup"));
const ProfileEdit = React.lazy(() => import("../pages/ProfileEdit"));
const RealEstateListing = React.lazy(
  () => import("../pages/RealEstateListing")
);
const RealEstateManage = React.lazy(() => import("../pages/RealEstateManage"));
const RealEstateDetail = React.lazy(() => import("../pages/RealEstateDetail"));
const MemberManage = React.lazy(() => import("../pages/MemberManage"));
const UpdateEstate = React.lazy(() => import("../pages/UpdateEstate"));
const MoodoMap = React.lazy(() => import("../pages/MoodoMap"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/map/:id" element={<MoodoMap />} />
          <Route path="/realEstateManage/:id" element={<RealEstateDetail />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profileEdit" element={<ProfileEdit />} />
            <Route path="/realEstateListing" element={<RealEstateListing />} />
            <Route path="/realEstateManage" element={<RealEstateManage />} />
            <Route path="/update/:id" element={<UpdateEstate />} />
            <Route path="/memberManage" element={<MemberManage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
