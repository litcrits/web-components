import styled from '@emotion/styled';

const InputStyle = styled.input({
  '&.input': {
    width: '100%',
    maxWidth: '100%',
    borderRadius: '0.5em',
    fontSize: '1em',
    lineHeight: '1.25em',
    padding: '0.25em 0.5em',
  },
},
({ theme: { colors } }) => ({
  '&.input': {
    border: `1px solid ${colors.border}`,
    color: colors.text,
    backgroundColor: colors.menuBackground,
  },
}));

export default InputStyle;
