import styled from "@emotion/styled";
import constantsStyled from "../../styles/constants.styled";

export const HeaderNavStyled = styled.nav`
    ul {
        font-family: Roboto, sans-serif;
        li {
            padding: 0 17.4px;
        }
        li:first-child {
            padding-left: 0;
            &:after {
                left: 0 !important;
            }
        }

        li:nth-last-child(2) {
            padding-right: 0 !important;
            &:after {
                right: 0 !important;
            }
        }

        li {
            font-size: 14px !important;
            font-weight: 500;
            color: ${constantsStyled.textLight};
        }

        li:hover {
            color: ${constantsStyled.textActive};
        }
    }
  }
`;
