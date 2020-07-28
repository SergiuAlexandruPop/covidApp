import styled from "styled-components";
import background from "../../assets/background.jpg";

export const PageContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GlobalCasesContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
