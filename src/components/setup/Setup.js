import PropTypes from 'prop-types';
import React from 'react';
import { Global, css } from '@emotion/core';

const globalStyles = css`
  html {
    overflow: hidden;
    height: 100%;
  }
  body {
    height: 100%;
    overflow: auto;
  }
  html, body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    height: 100%;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    background-color: #FFFBF1;
    #app {
      height: 100%;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: Roboto Slab, serif;
    }
    label, input, select, textarea {
      font-family: Roboto, sans-serif;
    }
    p {
      margin: 0;
    }
    *:focus {
      outline: none;
    }
    *, *:before, *:after {
      box-sizing: border-box;
    }
  }
`;

function Setup({ children }) {
  return (
    <>
      <Global styles={globalStyles}/>
      {children}
    </>
  );
}

Setup.propTypes = {
  children: PropTypes.any,
};

export default Setup;
