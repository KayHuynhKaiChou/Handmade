import { Outlet } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {ToastContainer} from "react-toastify";

export default function LayoutCommon() {
  return (
    <>
        <ToastContainer />
        <HeaderComponent/>
        <Outlet/>
        <FooterComponent/>
    </>
  )
}
