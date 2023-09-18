import { ReactNode } from 'react';
import './styles.css';

interface props {
    children?: ReactNode;
}

function GlobalStyles({ children }: props) {
    return <>{children}</>;
}

export default GlobalStyles;
