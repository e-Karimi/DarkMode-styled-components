import styled ,{createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
  margin:0 !important;
  padding: 0;
  }
`;

export const OuteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 70px;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
  margin: 15px 0 10px 0 !important;
`;

export const SubTitle = styled.h4`
  color: ${(props) => props.theme.subTitle};
  margin: 0;
`;