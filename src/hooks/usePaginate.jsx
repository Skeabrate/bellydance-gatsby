import { useState, useEffect, useMemo } from 'react';

const POSTS_VALUE = 8;

export const usePaginate = (data, loadingRef) => {
    const [postsCount, setPostsCount] = useState(POSTS_VALUE);

    const currentData = data?.allDatoCmsPost.edges.slice(0, postsCount);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) setPostsCount((state) => state + POSTS_VALUE);
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
