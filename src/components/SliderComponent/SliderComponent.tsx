import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../CardComponent/CardComponent";
import "../SliderComponent/Slider.css";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";
import { useNavigate } from "react-router-dom";

interface PropsSlider {
  slidesToShow: number;
  listItems: Array<any>;
  nameSlider: String;
}

export default function SliderComponent(props: PropsSlider) {
  const navigate = useNavigate();
  const { slidesToShow = 1, listItems = [], nameSlider } = props;

  const arrowCustome = () => {
    switch (nameSlider) {
      case "imagesBackground":
      case "imagesClothes":
        return {
          prevArrow: (
            <img
              alt=""
              src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-gauche-gris.png"
            />
          ),
          nextArrow: (
            <img
              alt=""
              src="https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-grise.png"
            />
          ),
        };
      case "clothesFilter":
        return {
          prevArrow: <img src={leftArrow} />,
          nextArrow: <img src={rightArrow} />,
        };
      default:
        return {
          prevArrow: <img src={leftArrow} />,
          nextArrow: <img src={rightArrow} />,
        };
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    ...arrowCustome(),
  };
  var settings_nameSlider = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    ...arrowCustome()
  };
  var settings_typeCategories_clothesFilter = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    ...arrowCustome(),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderSlider = () => {
    switch (nameSlider) {
      case "imagesBackground":
        return (
          <Slider {...settings_nameSlider} className="slider-img-bg">
            {listItems?.map((item) => (
              <img src={item} alt="" width="100%" height={500} />
            ))}
          </Slider>
        );
      case "clothesFilter":
        return (
          <Slider
            {...settings_typeCategories_clothesFilter}
            className="slider-arrow-custome"
          >
            {listItems?.map((item) => (
              <div className="custome-card-home-page">
                <CardComponent
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  linkDetailHM={item.linkDetailHM}
                  typeId={item.typeId}
                  rate={item.rate}
                  selled={item.selled}
                />
              </div>
            ))}
          </Slider>
        );
      default:
        return <></>;
    }
  };

  return renderSlider();
}
