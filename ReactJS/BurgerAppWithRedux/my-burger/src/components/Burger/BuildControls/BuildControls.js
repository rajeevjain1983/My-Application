import React from 'react';
import BuildControl from '../BuildControl/BuildControl';
import Classes from './BuildControls.css'

const controls =[
    {label:"Bacon", type:"bacon"},
    {label:"Meat", type:"meat"},
    {label:"Salad", type:"salad"},
    {label:"Cheese", type:"cheese"},
]

const BuildControls =(props)=>{
return (
            <div className={Classes.BuildControls}>
            <p>Current Price <strong>{props.price.toFixed(2)}</strong></p>
                {
                    controls.map(ctrl=>{
                            return <BuildControl 
                            key={ctrl.label} 
                            label={ctrl.label} 
                            added={()=>props.addedIngredients(ctrl.type)}
                            removed={()=>props.removeIngredients(ctrl.type)}
                            disabled={props.disabledInfo[ctrl.type]}

                             />
                        })
                }
                <button onClick={props.orderedNow} disabled={!props.purchasable} className={Classes.OrderButton}>ORDER NOW</button>
            </div>
        )
}

export default BuildControls;