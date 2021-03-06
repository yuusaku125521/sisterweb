import styled from "styled-components";
import media from 'styled-media-query';

export const ProfileBody = styled.div`
text-align: center;
  fontFamily: 'Courier New'
  background-color: #fff8dc
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
`;


export const ProfileTitle = styled.h1`
/
 font-size : 50px;
fontFamily: 'Courier New'
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

export const Mainimg = styled.div`
// padding-left: 780px;
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

