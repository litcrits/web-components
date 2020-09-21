import styled from '@emotion/styled';

export default styled.label({
  '&.label': {
    display: 'block',
    fontSize: '0.75em',
    lineHeight: '1em',
    padding: '0.75em 0.5em 0.1em',

    '.required-asterisk': {
      marginLeft: '2px',
    },
  },
},
({ theme: { colors } }) => ({
  '&.label': {
    color: colors.text,
  },
})
);
