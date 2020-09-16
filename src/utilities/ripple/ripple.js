function ripple({
  activeStyles = {},
  backgroundColor,
  hoverStyles = {},
  transitionSpeed = 350,
  rippleColor,
  selector, // apply :hover and :active styles to a nested selector from the current selector
}) {
  const hoverSelector = selector ? `&:hover ${selector}` : '&:hover';
  const activeSelector = selector ? `&:active ${selector}` : '&:active';

  return {
    backgroundPosition: 'center',
    transition: `background ${transitionSpeed}ms`,

    [hoverSelector]: {
      ...hoverStyles,
      background: `${backgroundColor} radial-gradient(circle, transparent 1%, ${backgroundColor} 1%) center/15000%`,
    },

    [activeSelector]: {
      ...activeStyles,
      backgroundColor: rippleColor,
      backgroundSize: '100%',
      transition: 'background 0s',
    },
  };
}

export default ripple;
