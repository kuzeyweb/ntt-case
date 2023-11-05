import styled from "@emotion/styled";
import constantsStyled from "./constants.styled";

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: auto;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;

  @media ${constantsStyled.m1440} {
    margin: 0 16px;
  }
`;
