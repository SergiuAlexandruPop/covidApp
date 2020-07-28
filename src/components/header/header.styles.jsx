import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Button = styled(Link)`
  font-size: 1.3rem;
  padding: 1rem 1.5rem;
  margin: 2rem 1rem 0 0;
  cursor: pointer;
  color: #ffffff;
  justify-self: stretch;
  align-self: center;
  background: linear-gradient(to bottom, #47010d 7%, #290007 75%, #52000e);
  opacity: 0.7;
  border-radius: 3.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    text-decoration: none;
    transform: scale(1.05);
  }
`;
