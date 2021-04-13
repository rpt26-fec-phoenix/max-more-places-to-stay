import React from 'react';
import Listing from './Listing.jsx';
import styled from 'styled-components';

const StyledListings = styled.div`
  display: flex;
`

const Listings = ({ morePlaces }) => {
  return (
    <StyledListings>
      <Listing details={morePlaces[0]}/>
      <Listing details={morePlaces[1]}/>
      <Listing details={morePlaces[2]}/>
      <Listing details={morePlaces[3]}/>
    </StyledListings>
  )
};

export default Listings;