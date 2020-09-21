import styled from '@emotion/styled';
import zIndex from '../../utilities/zIndex';

export default styled.span({
  '&.slider': {
    '.track': {
      position: 'relative',
      width: '100%',
      height: '0.5em',
      marginTop: '0.5em',
      borderRadius: '0.25em',

      '.points': {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '1.25em',
        top: '-0.5em',
        left: 0,

        '.point': {
          position: 'relative',
          flex: 2,
          cursor: 'pointer',

          '.point-label': {
            marginTop: '1.25em',
            textAlign: 'center',
            userSelect: 'none',
          },

          '.point-circle': {
            position: 'absolute',
            top: '0.5em',
            left: 'calc(50% - 0.1875em)',
            borderRadius: '0.1875em',
            width: '0.5em',
            height: '0.5em',
            zIndex: zIndex.slider,

            '&.mark': {
              top: '0.1875em',
              left: 'calc(50% - 0.5em)',
              width: '1em',
              height: '1em',
              borderRadius: '0.5em',
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
              left: 'calc(100% - 0.5em)',

              '&.mark': {
                left: 'calc(100% - 1em)',
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
            border: `0.125em solid ${colors.text}`,

            '&.mark': {
              background: colors.highlight,
              border: `0.125em solid ${colors.text}`,
            },
          },
        },
      },
    },
  },
})
);
