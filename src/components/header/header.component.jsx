import React from "react";

import { Button, HeaderContainer } from "./header.styles.jsx";

const Header = () => {
  return (
    <HeaderContainer>
      <Button to="/">Global</Button>
      <Button to="/selection">By Country</Button>
      <Button to="/recomandations">Recomandations</Button>
    </HeaderContainer>
  );
};

export default Header;
