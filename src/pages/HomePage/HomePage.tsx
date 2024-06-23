import SliderComponent from "../../components/SliderComponent/SliderComponent";
import { Navigate, useNavigate } from "react-router-dom";
import banner from "../../assets/img/banner.png";
import banner1 from "../../assets/img/Thiết kế chưa có tên.png";
import './Home.css'
import { listHandleMadeFake, types } from "../../data/handmade";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderComponent/>
      <div className="container" id="homepage">
        <div className="listBanners">
          <SliderComponent
            slidesToShow={1}
            listItems={[
              'https://en.idei.club/uploads/posts/2023-03/1679876733_en-idei-club-p-handmade-wallpaper-dizain-vkontakte-11.jpg',
              'https://en.idei.club/uploads/posts/2023-03/1679876727_en-idei-club-p-handmade-wallpaper-dizain-vkontakte-4.jpg'
            ]}
            nameSlider={"imagesBackground"}
          />
          <div className="introduce">
            <div className="introduce-ttl text-animation">Tiệm tháng 8</div>
            <div className="introduce-content text-animation">Cửa hàng handmade online tại Quy Nhơn , nơi bán các sản phẩm handmade từ len như móc khóa , mũ, túi xách và nhiều loại khác.</div>
          </div>
        </div>
        {types.map(type => {
          const filterListHandMade = listHandleMadeFake.filter(hm => hm.typeId == type.id)
          return (
            <>         
              <div className="header-preview">
                <div className="content">
                  <a onClick={() => navigate("/product", {})}>{type.name}</a>
                </div>
                <div className="more">
                  <a onClick={() => window.open(type.linkDetailType , '_blank')}>xem thêm</a>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div className="product">
                <SliderComponent
                  slidesToShow={5}
                  listItems={filterListHandMade}
                  nameSlider={"clothesFilter"}
                />
              </div>
            </>
          )
        })}
      </div>
      <FooterComponent/>
    </>
  );
}
