import PropTypes from 'prop-types';
import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { connect } from 'react-redux';

const darkTheme = {
  colors: {
    background: '#464646',
    border: '#666666',
    highlight: '#00B08A',
    menuBackground: '#333333',
    menuHover: '#464646',
    text: '#EEEEEE',
  },
  name: 'DARK',
};

const lightTheme = {
  colors: {
    background: '#FFFBF1',
    border: '#DDDDDD',
    highlight: '#00B08A',
    menuBackground: '#FFFFFF',
    menuHover: '#F3F3F3',
    text: '#333333',
  },
  name: 'LIGHT',
};

const globalStyles = (theme) => css`
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
    font-size: ${theme.fontSize}px;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};

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

function Setup({ children, fontSize, theme }) {
  const isDark = theme === 'DARK';
  const themeValue = isDark ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={{
        ...themeValue,
        fontSize,
      }}>
        <Global styles={globalStyles}/>
        {children}
      </ThemeProvider>
    </>
  );
}

export function mapStateToProps({ user }) {
  return {
    fontSize: user.fontSize || 16,
    theme: user.theme,
  };
}

Setup.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string,
};

export default connect(mapStateToProps)(Setup);
