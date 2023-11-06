import styled from "@emotion/styled";
import constantsStyled from "../../styles/constants.styled";

export const ProductCardStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media ${constantsStyled.m480} {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 12px;
  .MuiCard-root {
    width: 285px;
    @media ${constantsStyled.m480} {
      width: 100%;
    }
    position: relative;

    border: 1px solid rgba(230, 230, 230, 1);
    box-shadow: none;

    & > div {
      padding: 12px;
      img {
        width: 259px;
        height: 179px;
        margin-bottom: 12px;
        @media ${constantsStyled.m480} {
          width: 100%;
        }
      }
      h2 {
        color: ${constantsStyled.primaryDark};
        font-size: 16px;
        font-weight: 600;
        margin: 4px 8px;
        margin-bottom: 7px;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        font-size: 14px;
        font-weight: 700;
        color: ${constantsStyled.primaryDark};
        padding: 4px 8px;
        background-color: rgba(230, 238, 248, 1);
        margin-bottom: 4px;
      }
      .desc {
        font-size: 12px;
        font-weight: 500;
        color: ${constantsStyled.primaryDark};
        padding: 4px 8px;
      }
      .desc-text div {
        font-size: 12px;
        line-height: 14.06px;
        color: ${constantsStyled.primaryDark};
        padding: 4px 10px 4px 8px;

        a {
          color: rgba(0, 89, 188, 1);
          font-style: italic;
        }
      }
      .shipping {
        position: absolute;
        bottom: 12px;
        font-size: 10px;
        line-height: 12.1px;
        font-family: "Inter", sans-serif;
        color: ${constantsStyled.text};
        padding: 4px 8px;
      }
    }
    .like-button {
      ${constantsStyled.flexCenter}
      cursor: pointer;
      padding: 4px;
      position: absolute;
      top: 23px;
      right: 24px;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 36px;
      svg {
        fill: rgba(209, 209, 209, 1);
        width: 16px;
        height: 16px;
      }
    }
  }
`;
