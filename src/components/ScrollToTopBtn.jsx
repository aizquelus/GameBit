import { useState, useEffect } from "react";

const ScrollToTopBtn = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollHeight = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollHeight > 20);
    };

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && <button onClick={scrollToTop} id="scrollToTop" title="Go to top">↑</button>}
        </>
    );
}

export default ScrollToTopBtn