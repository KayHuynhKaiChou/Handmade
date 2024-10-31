import SliderComponent from "../../components/SliderComponent/SliderComponent";
import './Home.css'
import CardV1Component from "../../components/CardComponent/CardV1Component.tsx";
import {Modal} from "antd";
import {useState} from "react";
import FormPackageBrandComponent from "../../components/FormPackageBrandComponent/FormPackageBrandComponent.tsx";

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
        <SliderComponent
          slidesToShow={1}
          listItems={[
            'https://mozanio.com/wp-content/uploads/2021/05/xe-take-away-4.png',
            'https://quaybanhangdidonggiare.com/upload/products/xe-cafe-take-away1559379185AG08t.jpg'
          ]}
          nameSlider={"imagesBackground"}
        />
        <div className="introduce">
          <div className="introduce-ttl text-animation">Cà phê làng</div>
          <div className="introduce-content text-animation">
            Cung cấp túi xách thủ công làm từ quần jeans tái chế, giúp giảm lượng rác thải và tạo phong cách cá nhân độc đáo.
          </div>
        </div>
      </div>
      <div className="bl_mainTitle_wrap">
        <div className="bl_mainTitle">Chọn gói nhượng quyền thương hiệu</div>
      </div>
      <div className="bl_package_wrap">
          <CardV1Component onHandleClickBtn={handleOpenModal}/>
          <CardV1Component onHandleClickBtn={handleOpenModal}/>
          <CardV1Component onHandleClickBtn={handleOpenModal}/>
      </div>
        <Modal title={null} width={1000} open={isOpen} onCancel={handleCancel} footer={null} >
            <FormPackageBrandComponent moneyBank={15000} />
        </Modal>
    </div>
  );
}
