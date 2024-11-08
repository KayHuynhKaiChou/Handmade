import './Home.css'
import CardV1Component from "../../components/CardComponent/CardV1Component.tsx";
import {Modal} from "antd";
import {useState} from "react";
import FormPackageBrandComponent from "../../components/FormPackageBrandComponent/FormPackageBrandComponent.tsx";
import {cafeshops} from "../../data/cafelang.ts";
import cflBanner from "../../assets/img/cflBanner.jpg";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const handleCancel = () => {
        setIsOpen(false);
    }

    const handleOpenModal = () => {
        setIsOpen(true);
    }

  return (
    <div className="container" id="homepage">
      <div className="listBanners">
        <img src={cflBanner} style={{ width: '100%' , height: '600px' }} />
        {/*<div className="introduce">*/}
        {/*  <div className="introduce-ttl text-animation">Cà phê làng</div>*/}
        {/*  <div className="introduce-content text-animation">*/}
        {/*    Cung cấp túi xách thủ công làm từ quần jeans tái chế, giúp giảm lượng rác thải và tạo phong cách cá nhân độc đáo.*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div className="bl_mainTitle_wrap">
        <div className="bl_mainTitle">
            Các quán đã tham gia chuỗi Cà phê Làng
        </div>
      </div>
      <div className="bl_package_wrap">
          {cafeshops.map(c => (
            <CardV1Component version={2} inforCafe={c} onHandleClickBtn={handleOpenModal}/>
          ))}
      </div>
        <Modal title={null} width={1000} open={isOpen} onCancel={handleCancel} footer={null} >
            <FormPackageBrandComponent moneyBank={15000} />
        </Modal>
    </div>
  );
}
