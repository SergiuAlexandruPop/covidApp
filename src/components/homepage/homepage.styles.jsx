import styled from "styled-components";
import background from "../../assets/background.jpg";

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
  align-items: flex-end;
`;

export const UpdatingInfo = styled.h1`
  margin-top: 15%;
  color: #a19e9e;
`;

export const AllCasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
`;

export const GlobalCasesContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2rem;
  background-color: #ffff;
  margin: 10% 10% 0 0;
  opacity: 0.6;
  box-shadow: 0 4px 8px 0 #929292, 0 6px 20px 0 #929292;
`;

export const NumberContainer = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  color: black;

  span {
    margin-left: 0.5rem;
  }
`;
