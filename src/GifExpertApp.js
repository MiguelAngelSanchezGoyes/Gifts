import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./components/GitGrid";

export const GifExpertApp = ()=> {

    //const categories =['One punch', 'Samurai x', 'Dragon ball'];
    const [categories, setCategories]= useState(['One punch']);

   /*  const handleAdd =()=>{
        setCategories([...categories, 'Hunter x']);
        //setCategories(cats => [...cats, 'Hunter x']); ==> Otra forma. callback donde el primer argumento 'cats' tiene el valor del estado anterior.
    } */


    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            

            <ol>{categories.map(category=>{
                return <GitGrid 
                          key={category}
                          category={category}
                       />
            })}</ol>
        </div>
    )
}