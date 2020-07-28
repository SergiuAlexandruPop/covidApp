import React from "react";

import Header from "../header/header.component";

import {
  PageContainer,
  CountryCasesContainer,
  SelectionCasesContainer,
} from "./selectionpage.styles";

import { ContentContainer } from "../homepage/homepage.styles";

const SelectionPage = () => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <SelectionCasesContainer>
          <CountryCasesContainer>
            <p>World Total</p>
            <p>World Total</p>
            <p>World Total</p>
            <p>World Total</p>
          </CountryCasesContainer>
        </SelectionCasesContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default SelectionPage;
