import { useState, useEffect, useMemo } from 'react';

export const usePaginate = (data, loadingRef) => {
    const [postsCount, setPostsCount] = useState(1);

    const postPerPage = 12;
    const indexOfLastPost = postsCount * postPerPage;
    const currentData = data?.allDatoCmsPost.edges.slice(0, indexOfLastPost);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) setPostsCount((state) => state + 1);
    };

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        const currRef = loadingRef.current;

        if (currRef) observer.observe(currRef);

        return () => currRef && observer.unobserve(currRef);
    }, [options, loadingRef]);

    return { currentData };
};
