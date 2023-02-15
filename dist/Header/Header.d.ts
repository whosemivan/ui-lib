import { FC } from 'react';
import "./Header.css";
export interface HeaderProps {
    menu?: {
        name: string;
        link: string;
        isActive: boolean;
    }[];
    logo?: {
        path?: string;
        altText: string;
        imgWidth?: string;
    };
    isSearch?: boolean;
}
declare const Header: FC<HeaderProps>;
export default Header;
