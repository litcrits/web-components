import styled from '@emotion/styled';
import zIndex from '../../utilities/zIndex';

export default styled.ul({
  '&.menu': {
    label: 'menu',
    opacity: 0,
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    width: '100%',
    borderRadius: '0.5rem',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    padding: '0.5rem 0',
    margin: 0,
    listStyle: 'none',
    transition: 'opacity 200ms ease',
    zIndex: zIndex.menu,

    '&.active': {
      opacity: 1,
      visibility: 'visible',
    },

    'li.group': {
      '&:not(:last-of-type)': {
        paddingBottom: '0.5rem',
        marginBottom: '0.5rem',
      },

      'ul.group-items': {
        padding: 0,
        margin: 0,
        listStyle: 'none',

        'li.group-item': {
          height: '3rem',
          lineHeight: '3rem',
          width: '100%',
          padding: '0 1.5rem',
          cursor: 'pointer',
        },
      },
    },
  },
},
({ theme: { colors } }) => ({
  '&.menu': {
    backgroundColor: colors.menuBackground,

    'li.group': {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${colors.border}`,
      },

      'ul.group-items': {
        'li.group-item': {
          '&:hover': {
            backgroundColor: colors.menuHover,
          },
        },
      },
    },
  },
})
);
