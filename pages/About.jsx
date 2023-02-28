import styled from "styled-components";
import { media, theme, MixStyle } from "../components/Style";
const { colors, fontSizes, fonts } = theme;
const Section = styled.section`
  ${media.phablet`padding:20px;`}
  padding: 50px;
  position: relative;
  /* margin: 150px 0px; */
`;
const Heading = styled.h3`
  position: relative;
  font-family: ${fonts.SFMono};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  letter-spacing: 0.5rem;
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
const StyledFlexContainer = styled.div`
  ${MixStyle.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;

const StyledContent = styled.div`
  width: 60%;
  font-family: ${fonts.SFMono};
  line-height: 20px;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${MixStyle.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.slate};
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;

const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  cursor: pointer;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledAvatar = styled.img`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  width: 100%;
  height: auto;
  transition: ${theme.transition};
`;

const StyledAvatarLink = styled.div`
  ${MixStyle.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  margin-left: -20px;

  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
      transform: rotate(180deg);
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
    transition: transform 1s;
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;
const About = () => {
  return (
    <Section id="about">
      <Heading style={{ marginTop: "50px" }}>About Me</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div>
            Hello! I'm Naseeb, a software engineer based in Punjab, PK.
          </div>
          <div>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </div>
          <div>
            Here are a few technologies I've been working with recently:
          </div>
          <SkillsContainer>
            <Skill>Html5</Skill>
            <Skill>CSS3 and CSS5</Skill>
            <Skill>Javascript</Skill>
            <Skill>React Js</Skill>
            <Skill>Next Js</Skill>
            <Skill>Github</Skill>
            <Skill>Typescript</Skill>
            <Skill>PHP</Skill>
            <Skill>Laravel</Skill>
          </SkillsContainer>
          <div>Other Knowledge Area</div>
          <SkillsContainer>
            <Skill>Nodejs</Skill>
            <Skill>Express Js</Skill>
            <Skill>Nest Js</Skill>
            <Skill>Mongodb</Skill>
            <Skill>My SQL</Skill>
            <Skill>Mongoose</Skill>
          </SkillsContainer>
        </StyledContent>
        <StyledPic title="Naseeb Ali">
          <StyledAvatarLink>
            <div>
              <StyledAvatar src="/assets/Images/naseeb.jpg" alt="" />
            </div>
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </Section>
  );
};
export default About;
