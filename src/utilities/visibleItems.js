import { compact, isArray, isEmpty } from 'lodash';

/**
 * Get the items that should be visible in a menu
 *
 * @param {Array} groups - All items
 *
 * @returns {Array} visibleItems - The items that should be visible in a menu
 */
export function getVisibleItems(groups) {
  if (!isArray(groups)) return [];

  return compact(groups.map((group) => {
    const visibleItems = compact(group.map((item) => {
      const { isVisible } = item;
      const newItem = { ...item };
      delete newItem.isVisible;

      if (typeof isVisible === 'function') {
        return isVisible() ? newItem : null;
      } else if (typeof isVisible === 'boolean') {
        return isVisible ? newItem : null;
      }

      return newItem;
    }));

    return isEmpty(visibleItems) ? null : visibleItems;
  }));
}
