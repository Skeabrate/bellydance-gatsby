import { useState } from 'react';

export const useAktualnosciSort = (data) => {
    const [sortDescending, setSortDescending] = useState(true);

    (function () {
        data?.allDatoCmsPost.edges.sort((a, b) =>
            sortDescending
                ? Date.parse(b.node.meta.firstPublishedAt) -
                  Date.parse(a.node.meta.firstPublishedAt)
                : Date.parse(a.node.meta.firstPublishedAt) -
                  Date.parse(b.node.meta.firstPublishedAt)
        );
    })();

    return { setSortDescending };
};
