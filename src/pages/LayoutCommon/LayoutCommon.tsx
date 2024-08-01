import { Outlet } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

export default function LayoutCommon() {
  return (
    <>
        <HeaderComponent/>
        <Outlet/>
        <FooterComponent/>
    </>
  )
}
