import React from "react";

import Header from "../header/header.component";

import {
  PageContainer,
  InformationContainer,
  AdvicesContainer,
} from "./advicespage.styles";

const AdvicesPage = () => {
  return (
    <PageContainer>
      <Header />
      <AdvicesContainer>
        <InformationContainer>
          <p>World Total</p>
          <p>World Total</p>
          <p>World Total</p>
          <p>World Total</p>
        </InformationContainer>
      </AdvicesContainer>
    </PageContainer>
  );
};

export default AdvicesPage;
