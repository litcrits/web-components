import styled from '@emotion/styled';

export default styled.span({
  '&.hamburger-wrapper': {
    display: 'inline-block',

    'span.hamburger': {
      position: 'relative',
      display: 'inline-block',
      width: '2rem',
      height: '2rem',
      transform: 'rotate(0deg)',
      transition: '0.5s ease-in-out',
      cursor: 'pointer',

      span: {
        display: 'block',
        position: 'absolute',
        height: '0.33rem',
        borderRadius: '0.33rem',
        width: '100%',
        opacity: '1',
        left: 0,
        transform: 'rotate(0deg)',
        transition: '0.25s ease-in-out',
      },

      'span:nth-child(1)': {
        top: '0.33rem',
      },

      'span:nth-child(2), span:nth-child(3)': {
        top: '1rem',
      },

      'span:nth-child(4)': {
        top: '1.67rem',
      },

      '&.open': {
        'span:nth-child(1)': {
          top: '0.67rem',
          width: '0%',
          left: '50%',
        },

        'span:nth-child(2)': {
          top: '1rem',
          transform: 'rotate(45deg)',
        },

        'span:nth-child(3)': {
          top: '1rem',
          transform: 'rotate(-45deg)',
        },

        'span:nth-child(4)': {
          top: '0.67rem',
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
        background: colors.text,
      },
    },
  },
})
);
