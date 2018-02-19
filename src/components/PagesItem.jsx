import React from 'react';

function PagesItem(props){
    return(
        <span 
            onClick={()=>{props.onhandle(props.id)}} 
            className={
                props.id === props.currentPage 
                    ? "pagination__number_active pagination__number"
                    : "pagination__number"
            }> {props.id} </span>
    )
}
export default PagesItem;