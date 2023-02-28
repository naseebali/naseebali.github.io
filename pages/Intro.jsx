import React from "react";
import styled from "styled-components";
import { media, theme, MixStyle } from "../components/Style";
const { colors, fontSizes, fonts } = theme;

const Section = styled.section`
  height: 100vh;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  flex-flow: column nowrap;
  padding: 50px;
  ${media.phablet`padding:20px;`}
`;

const H1 = styled.h1`
  word-spacing: 1rem;
  letter-spacing: 0.2rem;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.md};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
  margin: 0 0 20px 3px;
`;
const H2 = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
  color: ${colors.white};
`;

const H3 = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
  margin: 0px 0px 10px;
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  max-width: 500px;
  p {
    font-family: ${fonts.SFMono};
    line-height: 20px;
    font-size: 16px;
  }
`;

const StyledEmailLink = styled.a`
  ${MixStyle.bigButton};
`;

const Intro = () => {
  return (
    <Section>
      <H1>Hi, I am</H1>
      <H2>Naseeb Ali.</H2>
      <H3>I build things for the web.</H3>
      <StyledDescription>
        <p>
          I'm a software engineer based in Punjab, PK specializing in Front
          end Development.
        </p>
      </StyledDescription>
      <div style={{ transitionDelay: "500ms", marginTop: "50px" }}>
        <StyledEmailLink href="mailto:naseebalina2@gmail.com">
          Get In Touch
        </StyledEmailLink>
      </div>
    </Section>
  );
};
export default Intro;
