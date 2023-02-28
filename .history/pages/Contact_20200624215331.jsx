import React from "react";
import styled from "styled-components";
import { media, theme, MixStyle } from "../components/Style";
const { colors, fontSizes, fonts } = theme;
const Section = styled.section`
  ${media.phablet`padding:20px;`}
  padding: 50px;
  position: relative;
  margin: 150px 0px;
  .contact--content {
    max-width: 600px;
    margin: auto;
    text-align: center;
  }
  .contact--content p {
    font-size: 17px;
    line-height: 1.3;
    font-family: ${fonts.SFMono};
  }
`;
const Heading = styled.h3`
  position: relative;
  ${MixStyle.flexCenter}
  font-family: ${fonts.SFMono};
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  letter-spacing: 0.2rem;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  &:before {
    content: "";
    display: block;
    height: 10px;
    width: 100px;
    border-radius: 12px;
    background-color: ${colors.green};
    position: relative;
    top: 0px;
    margin-right: 20px;
    ${media.desktop`width: 100px;`};
    ${media.tablet`width: 80px;`};
    ${media.thone`margin-left: 10px;`};
    ${media.phone`width: 80px;`};
  }
  &:after {
    content: "";
    display: block;
    height: 10px;
    width: 100px;
    border-radius: 12px;
    background-color: ${colors.green};
    position: relative;
    top: 0px;
    margin-left: 20px;
    ${media.desktop`width: 100px;`};
    ${media.tablet`width: 80px;`};
    ${media.thone`margin-left: 10px;`};
    ${media.phone`width: 80px;`};
  }
`;
const StyledEmailLink = styled.a`
  ${MixStyle.bigButton};
`;
const Contact = () => {
  return (
    <Section id="contact">
      <Heading style={{ maeginTop: "50px" }}>GET IN TOUCH</Heading>
      <div className="contact--content">
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>
        <div style={{ transitionDelay: "500ms", marginTop: "50px" }}>
          <StyledEmailLink href="mailto:ranausama48@gmail.com">
            Say Hello
          </StyledEmailLink>
        </div>
      </div>
    </Section>
  );
};
export default Contact;
