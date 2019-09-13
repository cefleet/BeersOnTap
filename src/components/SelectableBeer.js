import React,{useRef, useEffect, useState} from "react";
import { FlexBox, Box} from "simplestyle";

export const Item = ({width, children}) => {
    return <Box width={width} textAlign="center" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">{children}</Box>
};

export default ({ beer, onClick }) => {
    const [width,setWidth] = useState(null);

    const ref = useRef(null);
    useEffect(() => {        
        setWidth(ref.current ? ref.current.offsetWidth : 0)
      }, []);

    return (
        <FlexBox onClick={onClick ? ()=>onClick(beer) : ()=>{}} border="1px solid #ccc" width="90%" ref={ref}>
            <Item width="200px">{beer.name}</Item>
            {width > 500 && <Item width="140px">{beer.company}</Item>}
            <Item width="90px">{beer.style}</Item>
            {width > 600 && <Item width="120px">{beer.city}, {beer.state}</Item>}
            {width > 400 && <Item width="90px"> {beer.abv}% abv</Item>}
            <Item width="30px">${beer.price}</Item>
        </FlexBox>
    )
}

