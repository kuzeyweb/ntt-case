import styled from "@emotion/styled";
import constantsStyled from "../../styles/constants.styled";

export const LayoutHeaderStyled = styled.header`
  padding: 25px 0 15px 0;
  border-bottom: 1px solid rgba(137, 145, 154, 1);

  .logo {
    margin-right: 24px;

    @media ${constantsStyled.m480} {
      display: flex;
      justify-content: space-between;
      margin-right: unset;
    }

    img {
      width: 170px;
      height: 25px;
    }
  }

  .search {
    margin-right: 12px;
    @media ${constantsStyled.m480} {
      margin-right: 0;
    }
    &-field {
      ${constantsStyled.flexItemsCenter}
      width: 100%;

      @media ${constantsStyled.m480} {
        margin-top: 24px;
      }
    }
  }

  & > div {
    ${constantsStyled.flexItemsCenter}

    @media ${constantsStyled.m480} {
      align-items: unset;
      flex-direction: column;
    }

    & > div {
      & > div {
        width: 735px;

        @media ${constantsStyled.m1440} {
          width: calc(100% - 122px);
        }

        @media ${constantsStyled.m480} {
          width: 100%;
        }

        height: 40px;
        padding: 0;
        & > div {
          padding: 0;
          @media ${constantsStyled.m480} {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
          }
        }
      }
    }

    input {
      padding: 8px 12px;
      color: ${constantsStyled.text};
      height: 24px;
      &::placeholder {
        font-weight: 500;
        color: rgba(116, 119, 122, 1);
        opacity: 1;
      }
    }

    #categorySelect {
      ${constantsStyled.flexItemsCenter}
      height: 40px;
      padding-top: 0;
      padding-bottom: 0;
      outline: 0;
      font-size: 14px;

      &::before {
        border-bottom: 0 !important;
      }
    }

    .adornment {
      & > div {
        height: 40px;
        background-color: rgba(244, 245, 246, 1);
        border-left: 0;
      }

      & svg {
        fill: ${constantsStyled.text};
      }

      & fieldset {
        border: none;
        height: 36px;
        top: 0;
        legend {
          display: none;
        }
      }
    }

    .Mui-focused > fieldset {
      border: solid;
    }

    button {
      width: 110px;
      height: 40px;
      background-color: ${constantsStyled.primary};

      @media ${constantsStyled.m480} {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }

      &:hover {
        background-color: ${constantsStyled.primary};
      }

      svg {
        fill: ${constantsStyled.white};
      }
    }
  }
`;
