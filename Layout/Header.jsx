import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Menu } from "../components/core";
import { MixStyle, media, theme } from "../components/Style";
const { colors, fontSizes, fonts } = theme;
const StyledContainer = styled.header`
  ${MixStyle.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${colors.navy};
  height: 100px;
  transition: ${theme.transition};
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const StyledNav = styled.nav`
  ${MixStyle.flexBetween};
  position: relative;
  width: 100%;
  color: ${colors.lightestSlate};
  font-family: ${fonts.SFMono};
  counter-reset: item 0;
  z-index: 12;
`;
const StyledLogo = styled.div`
  ${MixStyle.flexCenter};
  a {
    display: block;
    color: ${colors.green};
  }
`;
const StyledResumeButton = styled.a`
  ${MixStyle.smallButton};
  font-size: ${fontSizes.md};
  margin-left: 10px;
`;
const StyledLink = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const StyledListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${fontSizes.md};
  a {
    text-decoration: none;
    font-size: ${fontSizes.md};
    color: ${colors.lightSlate};
    padding: 5px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    &:hover {
      border-bottom: 4px solid ${colors.green};
      transition: all 0.2s ease 0s;
      color: ${colors.green};
    }
  }
`;
const StyledOrderList = styled.ol`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;
const StyledHamburger = styled.div`
  ${MixStyle.flexCenter}
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: ${colors.green};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props) =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: ${colors.green};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
    top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${(props) => (props.menuOpen ? 0 : 1)};
    transition: ${(props) =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${(props) =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`;
const Image = styled.img`
  ${media.phone`width: 200px;`};
`;
const Header = () => {
  const [state, setState] = useState({ menuOpen: false });
  const toggleMenu = () => {
    setState({ menuOpen: !state.menuOpen });
  };
  const { menuOpen } = state;
  return (
    <StyledContainer>
      <StyledNav>
        <StyledLogo>
          <a href="#intro" aria-label="home">
            <Image src="/assets/Images/naseeb-ali.png" alt="" />
          </a>
        </StyledLogo>
        <StyledHamburger onClick={toggleMenu}>
          <StyledHamburgerBox>
            <StyledHamburgerInner menuOpen={menuOpen} />
          </StyledHamburgerBox>
        </StyledHamburger>
        <StyledLink>
          <StyledOrderList>
            <StyledListItem>
              <Link href="#about">
                <a>About</a>
              </Link>
            </StyledListItem>
            <StyledListItem>
              <Link href="#work">
                <a>Work</a>
              </Link>
            </StyledListItem>
            <StyledListItem>
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </StyledListItem>
          </StyledOrderList>
          <StyledResumeButton
            external
            href="/assets/Images/naseebali-v2.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Resume
          </StyledResumeButton>
        </StyledLink>
      </StyledNav>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </StyledContainer>
  );
};
export default Header;
