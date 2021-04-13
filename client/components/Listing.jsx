import React from 'react';
import styled from 'styled-components';

const StyledListing = styled.div`
  border-width: 0px 10px;
  max-width: 25%;
  flex: 0 0 25%;
  border-style: solid;
  border-color: transparent;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`

const Listing = (props) => {
  return (
    <StyledListing>
      <div>Photo</div>
      <div>Average Reviews + Total Reviews</div>
      <div>typeOfPlace propertyType beds</div>
      <div>Title</div>
    </StyledListing>
  )
};

export default Listing;