import React from "react";
import styled from "styled-components";
import { Link } from "../components/core";
import SvgIcon from "../public/assets/icons/icon";
import { media, theme } from "../components/Style";
const { colors, fontSizes, fonts } = theme;

const StyledFooter = styled.footer`
  margin: 10px;

  .footer-row {
    display: flex;
    justify-content: space-between;
    max-width: 250px;
    margin: auto;
  }
  .footer--last-sec {
    font-size: 14px;
    font-family: ${fonts.SFMono};
    /* word-spacing: 0.2rem; */
    /* letter-spacing: 0.1rem; */
    color: white;
    text-align: center;
    margin-top: 20px;
  }
`;
const Span = styled.div`
  background: rgba(100, 255, 218, 0.07);
  border: 1px solid ${colors.green};
  box-shadow: 0px 0px 4px ${colors.green};
  border-radius: 12px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
  }

  &:hover {
    svg {
      transform: rotate(360deg);
      transition: transform 1s;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-row">
        <Link
          external
          target="_blank"
          href="https://www.facebook.com/naseeb.ali.1447"
          title="Facebook"
        >
          <Span>
            <SvgIcon
              color={colors.green}
              width={10}
              height={18.67}
              icon="facebook"
            />
          </Span>
        </Link>
        <Link
          external
          target="_blank"
          title="Twitter"
          href="https://twitter.com/naseebali_na2"
        >
          <Span>
            <SvgIcon
              color={colors.green}
              width={21.85}
              height={18}
              icon="twitter"
            />
          </Span>
        </Link>
        <Link
          external
          target="_blank"
          title="LinkeIn"
          href="https://www.linkedin.com/in/naseeb-ali-235997125/"
        >
          <Span>
            <SvgIcon
              color={colors.green}
              width={18.84}
              height={18}
              icon="linkdin"
            />
          </Span>
        </Link>
        <Link
          external
          title="Github"
          target="_blank"
          href="https://github.com/naseebali"
        >
          <Span>
            <SvgIcon
              color={colors.green}
              width={25}
              height={25}
              icon="github"
            />
          </Span>
        </Link>
        <Link
          external
          target="_blank"
          href="https://www.instagram.com/naseebali_na2/"
          title="Instagram"
        >
          <Span>
            <SvgIcon
              color={colors.green}
              width={23}
              height={22}
              icon="instagram"
            />
          </Span>
        </Link>
      </div>
      <div className="footer--last-sec">
        <p>Developed By Naseeb Ali 2023 © Punjab, PK</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
