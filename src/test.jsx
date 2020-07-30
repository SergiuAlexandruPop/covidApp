import React from "react";
import { connect } from "react-redux";
import { fetchGlobalData } from "../../actions/index";
import Header from "../header/header.component";

import {
  PageContainer,
  GlobalCasesContainer,
  ContentContainer,
} from "./homepage.styles.jsx";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchGlobalData();
  }
  render() {
    console.log(this.props.posts);
    return (
      <PageContainer>
        <Header />
        <ContentContainer>
          <GlobalCasesContainer></GlobalCasesContainer>
        </ContentContainer>
      </PageContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.post };
};

export default connect(mapStateToProps, { fetchGlobalData })(Homepage);
