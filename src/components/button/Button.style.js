import styled from '@emotion/styled';
import Color from '@alchemyalcove/color-calculator';
import ripple from '../../utilities/ripple';

export const BUTTON_COLORS = {
  highlight: 'highlight',
  link: 'link',
};

export const BUTTON_SIZES = {
  medium: 'medium',
  large: 'large',
};

const ButtonStyle = styled.button({
  fontSize: '1em',
  lineHeight: '1.25em',
  padding: '0.35em 1em',
  border: 'none',
  borderRadius: '1em',
  boxShadow: '0.15em 0.15em 0.5em rgba(0, 0, 0, 0.25)',
  width: 'fit-content',
  minWidth: 'fit-content',
  cursor: 'pointer',

  '&.size-large': {
    fontSize: '1.25em',
    lineHeight: '1.5em',
    padding: '0.5em 1.25em',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '&.full-width': {
    width: '100%',
  },
},
({ theme: { colors } }) => ({
  '&.color-highlight': {
    backgroundColor: colors.highlight,
    color: '#EEEEEE',
    fill: colors.background,

    ...ripple({
      backgroundColor: colors.highlight,
      rippleColor: new Color(colors.highlight).lighten(15).toHex(),
    }),
  },
  '&.color-link': {
    backgroundColor: 'transparent',
    color: colors.highlight,
    fill: colors.highlight,
    boxShadow: 'none',

    '&:active': {
      opacity: 0.8,
    },
  },
})
);

export default ButtonStyle;
