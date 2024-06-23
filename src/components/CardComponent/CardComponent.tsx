import { Card, Skeleton } from "antd";
import "./Card.css";
import {
  convertToShortNumber
} from "../../utils/utils";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
interface PropsCard {
  id : number;
  linkDetailHM : string;
  name : string;
  price : string;
  typeId : number;
  image : string;
  rate : number;
  selled : number;
}

export default function CardComponent(props: PropsCard) {
  const { id, linkDetailHM , name, price , typeId , image , rate , selled } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Card
      itemID={id+''}
      loading={isLoading}
      id="card"
      hoverable
      onClick={() => window.open(linkDetailHM, '_blank')}
      cover={
        isLoading ? (
          <Skeleton.Node
            active
            style={{ width: "249px", height: "297px" }}
          ></Skeleton.Node>
        ) : (
          <div>
            <a target="_blank" ></a>
            <div className="cart-header">
              <div className="cart-header__rated">
                <div className="num-rated">{rate}</div>
                <FaStar style={{ color: "yellow" }} />
              </div>
              <div className="cart-header__sold">Đã bán {convertToShortNumber(selled)}</div>
            </div>
            <div className="card-image">
              <img width={"100%"} height={"297px"} src={image} alt="" />
            </div>
          </div>
        )
      }
    >
      <div className="name">{name}</div>
      <div className="price-box">
        <span className="compare-price">{price} vnđ</span>
      </div>
    </Card>
  );
}
