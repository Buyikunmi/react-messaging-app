import React from 'react';


/**
 * @author
 * @function Layout
 **/
const Layout = (props) => {
    return (
        <div>
            <header>Header</header>
            {props.children}
        </div>
    );
}


export default Layout;
