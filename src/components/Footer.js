import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

// The & ( a Sass declaration, is that if this current element matches this class or type, also style it this way. )
// The font-weight is now dynamic and has a default. 

const Footer = () => (
  <footer
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      position: fixed;
      bottom: 0px;
      width: 100%;
    `}
  >
    <ul
        css={css`
            list-style: none;
            padding-inline-start: 0px;
        `}
    >
      <li>
        <NavLink to="/" activeClassName="current-page">
            Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/" activeClassName="current-page">
            About
        </NavLink>
      </li>
    </ul>
  </footer>
);

export default Footer;