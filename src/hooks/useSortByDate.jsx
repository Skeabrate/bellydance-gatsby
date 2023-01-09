import { useState } from 'react';

export const useSortByDate = (data) => {
  const [sortByDate, setSortByDate] = useState(true);

  (function () {
    data.sort((a, b) => {
      const aDate = a.node.date || a.node.createdAt;
      const bDate = b.node.date || b.node.createdAt;

      if (sortByDate) {
        return Date.parse(bDate) - Date.parse(aDate);
      } else {
        return Date.parse(aDate) - Date.parse(bDate);
      }
    });
  })();

  return { setSortByDate };
};
