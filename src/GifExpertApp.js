import React, { useState } from "react";

export const GifExpertApp = ()=> {

    //const categories =['One punch', 'Samurai x', 'Dragon ball'];
    const [categories, setCategories]= useState(['One punch', 'Samurai x', 'Dragon ball']);

    const handleAdd =()=>{
        setCategories([...categories, 'Hunter x'])

    }


    return (
        <div>
            <h1>GifExpertApp</h1>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>{categories.map(category=>{
                return <li key={category}>{category}</li>
            })}</ol>
        </div>
    )
}