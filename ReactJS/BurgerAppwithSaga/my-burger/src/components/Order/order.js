
import React from 'react';
import Classes from './order.css'

const order = (props)=>{

    const ingrelist =[]
    for(let ingr in props.ingredients)
    {
        ingrelist.push(
            {
                name:ingr,
                amount:props.ingredients[ingr]
            });
       
    }
   const spans =ingrelist.map(ingr =>{
       return <span style={{
        display: 'inline-block',
        border:'1px solid black',
        padding:'1px 2px',
        margin:'1px 2px',
        textTransform:'capitalize'

       }} key={ingr.name}>{ingr.name}:{ingr.amount}</span>
   })
    return(
     <div className={Classes.Order}>
         <p>Ingredients:{spans}</p>
         <p>Total Price ${props.totalprice.toFixed(2)} </p>
     </div>   
    )
}
export default order;