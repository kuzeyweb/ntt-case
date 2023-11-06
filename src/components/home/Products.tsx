import { useEffect, useState } from "react";
import { ProductsStyled } from "./products.styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Button } from "@mui/material";
import clsx from "clsx";
import { ProductCardStyled } from "./productCard.styled";
import ProductCard from "./ProductCard";
import { useQuery } from "react-query";
import CardSkeleton from "./CardSkeleton";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { Typography } from "antd";
import { v4 as uuid } from "uuid";

const { Title } = Typography;

export interface productData {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
  shippingMethod: string;
  isLiked?: boolean;
}

const Products = () => {
  const [filter, setFilter] = useState(false);
  const [expand, setExpand] = useState(false);
  const [data, setData] = useState<productData[] | null>();
  const [filteredData, setFilteredData] = useState<productData[] | null>();
  const fetchData = async () => {
    const response = await fetch(
      "https://honey-badgers-ecommerce.glitch.me/products"
    );
    const result = await response.json();
    setData(result);
    return result;
  };

  const { isLoading } = useQuery("products", fetchData);

  useEffect(() => {
    if (filter && data)
      setFilteredData(
        data.filter((item: productData) => item.isLiked === true)
      );
    else if (!filter && data) setFilteredData(data);
  }, [data, filter]);

  const toggleLike = (productId: number) => {
    const updatedData = data?.map((item) =>
      item.id === productId ? { ...item, isLiked: !item.isLiked } : item
    );

    setData(updatedData);

    if (filter) {
      const updatedFilteredData = updatedData?.filter(
        (item: productData) => item.isLiked
      );
      setFilteredData(updatedFilteredData);
    }
  };

  const likedProductCount =
    filteredData?.filter((product: productData) => product.isLiked).length ??
    "0";

  return (
    <ProductsStyled>
      <div className="products-header">
        <h2>Content title goes here</h2>
        <div className="info">
          <div>
            {likedProductCount > 0 ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            <span>{likedProductCount} ÜRÜN</span>
          </div>

          <Button
            onClick={() => setFilter((current) => !current)}
            variant="outlined"
            className={clsx({ outlined: !filter })}
          >
            {filter ? "Beğenilenler" : "Tüm Ürünler"}
          </Button>
        </div>
      </div>
      <ProductCardStyled>
        {filteredData && filteredData?.length > 0 && expand
          ? filteredData?.map((item: productData) => {
              return (
                <ProductCard key={uuid()} data={item} toggleLike={toggleLike} />
              );
            })
          : filteredData?.map((item: productData, index: number) => {
              if (index > 3) return null;
              return (
                <ProductCard key={uuid()} toggleLike={toggleLike} data={item} />
              );
            })}
        {isLoading && [0, 1, 2].map(() => <CardSkeleton key={uuid()} />)}
      </ProductCardStyled>
      {(!filteredData || (filteredData?.length < 1 && !isLoading)) && (
        <Title style={{ textAlign: "center", marginTop: "60px" }} level={3}>
          Ürün bulunamadı.
        </Title>
      )}
      {filteredData && filteredData?.length > 4 && (
        <div className="expand">
          <Button onClick={() => setExpand((current) => !current)}>
            {expand && <EastOutlinedIcon className="rotate-180" />}
            <span>{!expand ? "Daha Fazla" : "Daha Az"}</span>
            {!expand && <EastOutlinedIcon />}
          </Button>
        </div>
      )}
    </ProductsStyled>
  );
};

export default Products;
