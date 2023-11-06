import styled from "@emotion/styled";
import constantsStyled from "../../styles/constants.styled";

export const ProductsStyled = styled.section`
  .products-header {
    margin-bottom: 24px;
    @media ${constantsStyled.m480} {
      align-items: unset;
    }

    ${constantsStyled.flexBetween}
    align-items: center;
    h2 {
      font-size: 32px;
      font-weight: 500;
      @media ${constantsStyled.m480} {
        font-size: 16px;
        margin-top: 9px;
      }
    }

    .info {
      ${constantsStyled.flexItemsCenter}

      gap: 8px;

      div {
        ${constantsStyled.flexItemsCenter}

        @media ${constantsStyled.m480} {
          width: 100%;
          justify-content: end;
        }
        span {
          margin-left: 4px;
        }
      }
      @media ${constantsStyled.m480} {
        flex-direction: column-reverse;
      }

      span {
        margin-right: 4px;
        font-weight: 500;
      }

      button {
        font-weight: 500;
        text-transform: unset;
        background-color: ${constantsStyled.primary};
        color: ${constantsStyled.white};
        width: 126px;
      }

      .outlined {
        background-color: unset;
        color: ${constantsStyled.primary};
      }
    }
  }

  .expand {
    ${constantsStyled.flexCenter}
    button {
      text-transform: none;
      span {
        font-weight: 400;
        font-size: 20px;
      }
      margin-top: 36px;
      background-color: ${constantsStyled.primary};
      color: ${constantsStyled.white};
      padding: 16px 32px;

      svg {
        margin-left: 10px;
      }
    }
  }

  .rotate-180 {
    transform: rotate(180deg);
    margin-left: unset;
    margin-right: 10px;
  }
`;
