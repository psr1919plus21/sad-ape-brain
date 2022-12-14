import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface ILayout {
    children?: React.ReactElement;
}

const Layout:React.FC<ILayout> = ({children}) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
}

export default Layout;
