import React from "react";

import Header from "../header/header.component";

import {
  PageContainer,
  RecomandationsContainer,
  ContentContainer,
  InformationContainer,
} from "./recomandationspage.styles";

const RecomandationsPage = () => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <RecomandationsContainer>
          <InformationContainer>Wear a mask!!</InformationContainer>
          <InformationContainer>
            Wash the body parts that have been in contact with outside things
          </InformationContainer>
          <InformationContainer>
            Avoid people who work in crowded places as much as you can
          </InformationContainer>
          <InformationContainer>Sleep 8 hours every night</InformationContainer>
          <InformationContainer>Take vitamin D</InformationContainer>
          <InformationContainer>
            Keep at least 2m distance at all times
          </InformationContainer>
          <InformationContainer>Exercise 45 minutes daily</InformationContainer>
          <InformationContainer>
            Eat healthy: fresh fruits and vegetables
          </InformationContainer>
          <InformationContainer>
            Avoid alcohol as much as you can
          </InformationContainer>
        </RecomandationsContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default RecomandationsPage;
