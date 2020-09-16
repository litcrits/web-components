import styled from '@emotion/styled';

const InputStyle = styled.input({
  '&.input': {
    width: '100%',
    maxWidth: '100%',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    lineHeight: '1.25rem',
    padding: '0.25rem 0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
},
({ theme: { colors } }) => ({
  '&.input': {
    border: `1px solid ${colors.border}`,
    color: colors.text,
  },
}));

export default InputStyle;
