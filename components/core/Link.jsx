import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLink = styled.a`
  .ant-menu-dark .ant-menu-item > a {
    color: ${({ color }) => color};
  }
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  transition: 0.5s;
  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;
const HyperLink = ({ className, href, as, children, external, ...rest }) => {
  return !external ? (
    <Link href={href} as={as}>
      <StyledLink className={className} {...rest}>
        {children}
      </StyledLink>
    </Link>
  ) : (
    <StyledLink href={href} className={className} {...rest}>
      {children}
    </StyledLink>
  );
};

HyperLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  as: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  display: PropTypes.string,
  fontSize: PropTypes.string,
  weight: PropTypes.string,
};

HyperLink.defaultProps = {
  href: "/",
  align: "left",
  color: "#000",
  external: false,
  fontSize: "16px",
  display: "table",
  hoverColor: "#000",
};

export default HyperLink;
