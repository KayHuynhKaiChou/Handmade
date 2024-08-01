import SliderComponent from "../../components/SliderComponent/SliderComponent";
import { useNavigate } from "react-router-dom";
import './Home.css'
import { listHandleMadeFake, types } from "../../data/handmade";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container" id="homepage">
      <div className="listBanners">
        <SliderComponent
          slidesToShow={1}
          listItems={[
            'https://static-images.vnncdn.net/files/publish/2023/4/10/jean6-1465.jpg',
            'https://yenmay2hand.com/wp-content/uploads/2023/03/tai-che-quan-jean-cu-thanh-vay-6.jpg'
          ]}
          nameSlider={"imagesBackground"}
        />
        <div className="introduce">
          <div className="introduce-ttl text-animation">Tiệm tháng 8</div>
          <div className="introduce-content text-animation">
            Cung cấp túi xách thủ công làm từ quần jeans tái chế, giúp giảm lượng rác thải và tạo phong cách cá nhân độc đáo.
          </div>
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
  );
}
