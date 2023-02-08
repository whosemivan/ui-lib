import React, {FC} from 'react';
import "./Grid.css";
import GridItem from '../GridItem/GridItem';

export interface GridProps {
    templateColumns?: string;
    templateRows?: string;
    templateAreas?: string,
    gap?: number;
};

const Grid: FC<GridProps> = ({templateColumns, templateRows, templateAreas, gap, ...props}) => {
    return (
        <div className='grid' {...props} style={{
            gridTemplateColumns: templateColumns,
            gridTemplateRows: templateRows,
            gridTemplateAreas: templateAreas,
            gap: gap,
            height: 200
        }}>
            <GridItem rowSpan={2} colSpan={1}>
                <div>
                    hello
                </div>
            </GridItem>
            <GridItem colSpan={2}>
                <div>
                    hello
                </div>
            </GridItem>
            <GridItem colSpan={2}>
                <div>
                    hello
                </div>
            </GridItem>
            <GridItem colSpan={4}>
                <div>
                    hello
                </div>
            </GridItem>
        </div>
    ); 
};

export default Grid;