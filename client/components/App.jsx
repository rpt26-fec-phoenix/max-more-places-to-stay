import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import Listings from './Listings.jsx';
import sampleData from '../sample-data.js'

const StyledApp = styled.div`
  height: 100%;
  padding-top: 48px;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1280px;
  min-width: 744px;
  margin-left: 10%;
  margin-right: 10%;
`
const Header = styled.div`
  -webkit-box-pack: justify;
  -webkit-box-align: end;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 24px;
  color: rgb(34, 34, 34);
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
`

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      morePlaces: sampleData
    };
  }

  render() {
    return (
      <StyledApp>
        <Header>
          More Places to Stay
        </Header>
        <div>
          <Listings morePlaces={this.state.morePlaces}/>
        </div>
      </StyledApp>
    )
  }

}

export default App;
