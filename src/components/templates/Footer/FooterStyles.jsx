import styled from "styled-components";
import media from 'styled-media-query';

export const FooterNav = styled.nav`
background:#d3d3d3;
width: 100%;
height: 90px;

display: flex;
  text-align:center;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    background:#d3d3d3;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    background:#d3d3d3;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    background:#d3d3d3;
  `}
`;
