import styled from "styled-components";
import imageHeaderDesktop from "../../images/image-header-desktop.jpg";
import imageHeaderMobile from "../../images/image-header-mobile.jpg";
import { colors } from "../../themes";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.VERY_DARK_BLUE};

  @media screen and (max-width: 1400px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 3.125rem 6.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 33.75rem;
  grid-template-areas: ${`'col1 col2'`};

  @media screen and (min-width: 1001px) and (max-width: 1400px) {
    grid-template-areas: ${`'col2' 'col1'`};
    grid-template-rows: 1fr 1fr;
    grid-template-columns: auto;
  }

  @media screen and (min-width: 501px) and (max-width: 1000px) {
    grid-template-areas: ${`'col2' 'col1'`};
    grid-template-rows: 1fr 2fr;
    grid-template-columns: auto;
    margin: 3.125rem 2rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-areas: ${`'col2' 'col1'`};
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 90vw;
    margin: 3.125rem 1.5rem;
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  padding: 5rem 11.25rem 5rem 5rem;
  background-color: ${colors.DARK_DESATURATED_BLUE};

  @media screen and (max-width: 1400px) {
    padding: 5rem;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const Heading = styled.h1`
  color: ${colors.WHITE};
  font-size: 2.625rem;
  margin-bottom: 2.5rem;
`;

export const Span = styled.span`
  font-size: 2.625rem;
  color: ${colors.SOFT_VIOLET};
`;

export const Content = styled.p`
  color: ${colors.SLIGHTLY_TRANSPARENT_WHITE_PARAGRAPH};
  line-height: 1.875rem;
  font-size: 1.125rem;
`;

export const Stats = styled.div`
  margin-top: 6.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 450px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const StatItem = styled.div`
  text-transform: uppercase;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 450px) {
      margin-bottom: 15px;
  }
`;

export const StatVal = styled.h2`
  color: ${colors.WHITE};
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
`;

export const StatName = styled.h3`
  color: ${colors.SLIGHTLY_TRANSPARENT_WHITE_HEADING};
  font-size: 1rem;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 300;
  letter-spacing: 0.9px;
`;

export const Image = styled.div`
  background-image: url(${imageHeaderDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 500px) {
    background-image: utl(${imageHeaderMobile});
  }
`;
