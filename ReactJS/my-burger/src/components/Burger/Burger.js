import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredients';


const Burger =(props)=>{
    console.log(props);
    let transformedIngredients=Object.keys(props.ingredients).map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredient type={igkey} key={igkey+i}/>
        })
    }).reduce((arr,el)=>{
        //console.log(arr);
            return arr.concat(el);
    },[]);

     if(transformedIngredients.length ===0)
      transformedIngredients=<p>Please start adding Ingredients</p>

    return (
    <div className={Classes.Container}>
        <BurgerIngredient type="bread-top" ></BurgerIngredient>
       {transformedIngredients}
        <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
    );
}

export default Burger;
