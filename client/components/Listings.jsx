import React from 'react';
import Listing from './Listing.jsx';
import styled from 'styled-components';

const StyledListings = styled.div`
  display: flex;
`

const Listings = (props) => {
  return (
    <StyledListings>
      <Listing/>
      <Listing/>
      <Listing/>
      <Listing/>
    </StyledListings>
  )
};

export default Listings;