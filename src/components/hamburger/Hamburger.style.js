import styled from '@emotion/styled';

export default styled.span({
  '&.hamburger-wrapper': {
    display: 'inline-block',

    'span.hamburger': {
      position: 'relative',
      display: 'inline-block',
      width: '2em',
      height: '2em',
      transform: 'rotate(0deg)',
      transition: '0.5s ease-in-out',
      cursor: 'pointer',

      span: {
        display: 'block',
        position: 'absolute',
        height: '0.33em',
        borderRadius: '0.33em',
        width: '100%',
        opacity: '1',
        left: 0,
        transform: 'rotate(0deg)',
        transition: '0.25s ease-in-out',
      },

      'span:nth-child(1)': {
        top: '0.33em',
      },

      'span:nth-child(2), span:nth-child(3)': {
        top: '1em',
      },

      'span:nth-child(4)': {
        top: '1.67em',
      },

      '&.open': {
        'span:nth-child(1)': {
          top: '0.67em',
          width: '0%',
          left: '50%',
        },

        'span:nth-child(2)': {
          top: '1em',
          transform: 'rotate(45deg)',
        },

        'span:nth-child(3)': {
          top: '1em',
          transform: 'rotate(-45deg)',
        },

        'span:nth-child(4)': {
          top: '0.67em',
          width: '0%',
          left: '50%',
        },
      },
    },
  },
},
({ theme: { colors } }) => ({
  '&.hamburger-wrapper': {
    'span.hamburger': {
      span: {
        background: colors.highlight,
      },
    },
  },
})
);
