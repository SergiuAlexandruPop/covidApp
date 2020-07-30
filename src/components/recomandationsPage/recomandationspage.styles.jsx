import styled from "styled-components";
import background from "../../assets/preventionPage.jpg";

export const PageContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RecomandationsContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #fff;
  opacity: 0.4;
`;

export const InformationContainer = styled.p`
  width: 100%;
  border-top: 0.1rem solid black;
  font-size: 2rem;

  &:first-child {
    border-top: none;
  }
`;
