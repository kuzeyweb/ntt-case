import styled from "@emotion/styled";
import constantsStyled from "../../styles/constants.styled";

export const CarouselStyled = styled.div`
  margin-bottom: 48px;

  .carousel-dots {
    width: 100%;
    justify-content: end;
    bottom: 24px;
    @media ${constantsStyled.m480} {
      justify-content: center;
    }
    li {
      width: 10px !important;
      height: 10px;
      button {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        opacity: 1;
      }
    }

    .slick-active button {
      border: 1px solid #fff;
      background: transparent !important;
    }

    li:last-child {
      margin-right: 120px;
      @media ${constantsStyled.m480} {
        margin-right: 0;
      }
    }
  }
  .image-container {
    position: relative;
    overflow: hidden;
    height: 450px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: auto;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      height: 58px;
    }

    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
  }
`;
