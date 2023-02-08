import { FC } from 'react';
import "./Grid.css";
export interface GridProps {
    templateColumns?: string;
    templateRows?: string;
    templateAreas?: string;
    gap?: number;
}
declare const Grid: FC<GridProps>;
export default Grid;
