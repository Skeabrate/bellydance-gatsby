import { useState } from 'react';

export const useSortByDate = (data) => {
  const [sortByDate, setSortByDate] = useState(true);

  (function () {
    data?.allDatoCmsPost.edges.sort((a, b) => {
      const aDate = a.node.date || a.node.meta.firstPublishedAt;
      const bDate = b.node.date || b.node.meta.firstPublishedAt;

      if (sortByDate) {
        return Date.parse(bDate) - Date.parse(aDate);
      } else {
        return Date.parse(aDate) - Date.parse(bDate);
      }
    });
  })();

  return { setSortByDate };
};
