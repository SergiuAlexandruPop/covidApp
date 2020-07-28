import React from "react";

import Header from "../header/header.component";

import {
  PageContainer,
  GlobalCasesContainer,
  ContentContainer,
} from "./homepage.styles.jsx";

const Homepage = () => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <GlobalCasesContainer>
          <p>World Total</p>
          <p>World Total</p>
          <p>World Total</p>
          <p>World Total</p>
        </GlobalCasesContainer>
      </ContentContainer>
    </PageContainer>
  );
};

// const mapStateToProps = (state) => {
//   return { countries: state.countries };
// };

export default Homepage;

// componentDidMount() {
//   this.props.fetchData();
// }

// renderList() {
//   return this.props.countries
//     .filter((item, idx) => idx < 4)
//     .map((country) => {
//       return (
//         <div className="item" key={country.CountryCode}>
//           <div className="content">
//             <div className="cases">
//               <h2>`Last 24 hours cases: ${country.NewConfirmed}`</h2>
//               <h2>`Last 24 hours deaths: ${country.NewDeaths}`</h2>
//               <h2>`Last 24 hours recovers: ${country.NewRecovered}`</h2>
//               <h2></h2>
//             </div>
//           </div>
//         </div>
//       );
//     });
// }
