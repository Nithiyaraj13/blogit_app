import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

 
function ScrollToTopWrapper({ children }) {

    const location = useLocation();

 

    useEffect(() => {

        // Scroll to the top of the page whenever the location changes

        window.scrollTo(0, 0);

    }, [location]);

 

    return <>{children}</>;

}

 

export default ScrollToTopWrapper;