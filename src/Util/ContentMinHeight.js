import { useState, useEffect} from 'react';


const ContentMinHeight = function() {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        // Calculate header height and set state
        const headerElement = document.querySelector('.header');
        if (headerElement) {
        const height = headerElement.getBoundingClientRect().height;
        setHeaderHeight(height);
        }

        // Calculate footer height and set state
        const footerElement = document.querySelector('.footer');
        if (footerElement) {
        const height = footerElement.getBoundingClientRect().height;
        setFooterHeight(height);
        }
    }, []);

    const contentMinHeight = `calc(100vh - ${headerHeight}px - ${footerHeight}px)`;
    return contentMinHeight;
}

export default ContentMinHeight