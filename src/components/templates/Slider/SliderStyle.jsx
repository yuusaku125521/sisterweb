import styled from "styled-components";
import media from 'styled-media-query';


export const SliderStyle = styled.div`

    height: "490px",
    width: "480px",
    color: "#fff",
     ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
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

export const BodyStyle = styled.div`
    height: "450px",
    width: "480px",
    color: "#fff",
    background: "#ffed3c"
     ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
  `}
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
