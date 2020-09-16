import styled from '@emotion/styled';

export default styled.label({
  '&.label': {
    display: 'block',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    padding: '0.75rem 0.5rem 0.1rem',

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
