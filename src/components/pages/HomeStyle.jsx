import styled from "styled-components";
import media from 'styled-media-query';


export const HomeBody = styled.h1`

 ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
   background-color: #fff8dc
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    background-color: #fff8dc
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    background-color: #fff8dc
  `}
`