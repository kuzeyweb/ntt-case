import { Card, CardContent } from "@mui/material";
import { FC, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { productData } from "./Products";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Paragraph } = Typography;
type Props = {
  data: productData;
  toggleLike: Function;
};

const ProductCard: FC<Props> = ({ data, toggleLike }) => {
  const [expanded, setExpanded] = useState(false);

  const handleShowMoreClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      className="product"
      sx={{ minWidth: 275 }}
      style={{ height: "375px" }}
    >
      <CardContent>
        <Link to="https://google.com">
          <img src={data.imageUrl} alt="" />
          <h2>{data.name}</h2>
        </Link>

        <div className="price">
          {parseFloat(data.price).toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
          })}
        </div>
        <div className="desc">Description</div>
        <div className="desc-text">
          <Paragraph
            ellipsis={{
              rows: 2,
              expandable: true,
              onExpand: handleShowMoreClick,
              symbol: "devamını gör",
            }}
          >
            {data.description}
          </Paragraph>
        </div>
        <div className="shipping">{data.shippingMethod}</div>
        <div className="like-button" onClick={() => toggleLike(data.id)}>
          {data.isLiked ? (
            <FavoriteIcon style={{ fill: "red" }} />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
