import styled from "@emotion/styled";
import constantsStyled from "../../styles/constants.styled";

export const FooterStyled = styled.footer`
  margin-top: 96px;
  background-color: ${constantsStyled.primary};

  .sub-footer {
    padding: 20px 0;
   ${constantsStyled.flexBetween}
   @media ${constantsStyled.m480} {
    flex-direction: column;
    gap: 5px;
    text-align: center;
  }

   div {
    font-size: 20px;
    color: ${constantsStyled.white};
    line-height: 23.44px;

    svg {
        cursor: pointer;

        &:not(:last-child) {
            margin-right: 24px;
        }
    }

   }
}

  .divider {
    border-bottom: 1px solid rgba(217, 217, 217, 1);
  }

  .footer-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media ${constantsStyled.m480} {
        grid-template-columns: repeat(1, 1fr);
      }
    padding: 65px 0;

    .left-side {
      .desc {
        line-height: 18.75px;
        margin-top: 24px;
        color: ${constantsStyled.white};
        max-width: 407px;
        margin-bottom: 56px;
        @media ${constantsStyled.m480} {
            max-width: 320px;
          }
      }

      .email-signup {
        display: flex;
      }

      .email {
        height: 38px;
        & > div {
            background-color: #fff;
            height: 38px;
            border-radius: 0 !important;
    
            input {
              height: 38px;
              width: 407px;
              padding: 0 10px;

              @media ${constantsStyled.m480} {
                width: 200px;

              }

              &::placeholder {
                opacity: 1;
                color: ${constantsStyled.text};
              }
            }
      }

    }
    button {
        border-radius: 0 !important;
        height: 38px;
      text-transform: none;
      font-weight: 400;
      background-color: ${constantsStyled.primaryDark};
      color: ${constantsStyled.white}
    }

}
.right-side {
    display: flex;
    justify-content: end;
    gap: 142px;
    margin-top: 28px;

    @media ${constantsStyled.m480} {
        justify-content: space-between;
        gap: unset;
      }

    h5 {
        font-size: 24px;
        font-weight: 500;
        color: ${constantsStyled.white};
        margin-bottom: 24px;
    }

    ul li {
        font-size: 20px;
        line-height: 23.44px;
        color: ${constantsStyled.white};

        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
}
`;
