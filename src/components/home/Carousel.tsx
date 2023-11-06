import { useMediaQuery } from "@mui/material";
import { Carousel } from "antd";
import { CarouselStyled } from "./carousel.styled";
import { v4 as uuid } from "uuid";

const HomeCarousel = () => {
  const isMobile = useMediaQuery("(max-width:468px)");
  const isTablet = useMediaQuery("(max-width:1440px)");

  return (
    <CarouselStyled>
      <Carousel
        dots={{ className: "carousel-dots" }}
        dotPosition="bottom"
        style={{ width: "100%" }}
      >
        {[0, 1, 2, 3].map((_, index) => (
          <div key={uuid()} className="image-container">
            <img
              src={`/assets/images/slides/slide-${index + 1}${
                isMobile ? "-4x" : isTablet ? "-2x" : ""
              }.png`}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </CarouselStyled>
  );
};

export default HomeCarousel;
