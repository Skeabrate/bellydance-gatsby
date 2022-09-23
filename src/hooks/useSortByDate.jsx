import { useState } from 'react';

export const useSortByDate = (data) => {
  const [sortByDate, setSortByDate] = useState(true);

  (function () {
    data?.allDatoCmsPost.edges.sort((a, b) =>
      sortByDate
        ? Date.parse(b.node.meta.firstPublishedAt) - Date.parse(a.node.meta.firstPublishedAt)
        : Date.parse(a.node.meta.firstPublishedAt) - Date.parse(b.node.meta.firstPublishedAt)
    );
  })();

  return { setSortByDate };
};
