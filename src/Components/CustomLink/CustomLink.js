import './CustomLink.css';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";
import React from 'react'

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? 'rgb(253 186 116)' : 'black', textDecoration: match ? "underline" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink



