import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGlobalData } from "../../actions/index";
import Header from "../header/header.component";

import {
  PageContainer,
  GlobalCasesContainer,
  ContentContainer,
  UpdatingInfo,
  AllCasesContainer,
  NumberContainer,
} from "./homepage.styles.jsx";

const Homepage = () => {
  const selectedData = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const fetchedData = () => {
    dispatch(fetchGlobalData());
  };

  useEffect(fetchedData, []);

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <AllCasesContainer>
          <UpdatingInfo>Updating every 15 minutes...</UpdatingInfo>
          <GlobalCasesContainer>
            <NumberContainer>
              <span>New Confirmed : </span>
              <span>{selectedData.NewConfirmed}</span>
            </NumberContainer>
            <NumberContainer>
              <span>Total Confirmed : </span>
              <span>{selectedData.TotalConfirmed}</span>
            </NumberContainer>
          </GlobalCasesContainer>
          <GlobalCasesContainer>
            <NumberContainer>
              <span>New Deaths : </span>
              <span> {selectedData.NewDeaths}</span>
            </NumberContainer>
            <NumberContainer>
              <span>Total Deaths : </span>
              <span>{selectedData.TotalDeaths}</span>
            </NumberContainer>
          </GlobalCasesContainer>
          <GlobalCasesContainer>
            <NumberContainer>
              <span>New Recovered : </span>
              <span> {selectedData.NewRecovered}</span>
            </NumberContainer>
            <NumberContainer>
              <span>Total Recovered : </span>
              <span>{selectedData.TotalRecovered}</span>
            </NumberContainer>
          </GlobalCasesContainer>
        </AllCasesContainer>
      </ContentContainer>
    </PageContainer>
  );
};

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

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
//import { connect } from "react-redux";

// import { fetchGlobalData } from "../../actions/index";

// import Header from "../header/header.component";

// import {
//   PageContainer,
//   GlobalCasesContainer,
//   ContentContainer,
// } from "./homepage.styles.jsx";

// const Homepage = () => {
//   const dispatch = useDispatch();
//   const globalData = useSelector(fetchGlobalData);
//   return (
//     <PageContainer>
//       <Header />
//       <ContentContainer>
//         <GlobalCasesContainer>
//           <p>World Total</p>
//           <p>World Total</p>
//           <p>World Total</p>
//           <p>World Total</p>
//         </GlobalCasesContainer>
//       </ContentContainer>
//     </PageContainer>
//   );
// };
