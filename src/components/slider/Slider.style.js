import styled from '@emotion/styled';
import zIndex from '../../utilities/zIndex';

export default styled.span({
  '&.slider': {
    '.track': {
      position: 'relative',
      width: '100%',
      height: '0.5rem',
      marginTop: '0.5rem',
      borderRadius: '0.25rem',

      '.points': {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '1.25rem',
        top: '-0.5rem',
        left: 0,

        '.point': {
          position: 'relative',
          flex: 2,
          cursor: 'pointer',

          '.point-label': {
            marginTop: '1.25rem',
            textAlign: 'center',
            userSelect: 'none',
          },

          '.point-circle': {
            position: 'absolute',
            top: '0.5rem',
            left: 'calc(50% - 0.1875rem)',
            borderRadius: '0.1875rem',
            width: '0.5rem',
            height: '0.5rem',
            zIndex: zIndex.slider,

            '&.mark': {
              top: '0.1875rem',
              left: 'calc(50% - 0.5rem)',
              width: '1rem',
              height: '1rem',
              borderRadius: '0.5rem',
            },
          },

          '&:first-child': {
            flex: 1,

            '.point-label': {
              textAlign: 'left',
            },

            '.point-circle': {
              left: '0% !important',
            },
          },

          '&:last-child': {
            flex: 1,

            '.point-label': {
              textAlign: 'right',
            },

            '.point-circle': {
              left: 'calc(100% - 0.5rem)',

              '&.mark': {
                left: 'calc(100% - 1rem)',
              },
            },
          },
        },
      },
    },
  },
},
({ theme: { colors } }) => ({
  '&.slider': {
    '.track': {
      background: colors.border,

      '.points': {
        '.point': {
          '.point-circle': {
            border: `0.125rem solid ${colors.text}`,

            '&.mark': {
              background: colors.highlight,
              border: `0.125rem solid ${colors.text}`,
            },
          },
        },
      },
    },
  },
})
);
