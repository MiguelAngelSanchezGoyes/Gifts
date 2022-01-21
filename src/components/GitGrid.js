import React from "react";

export const GitGrid = ({category})=>{

    const getGifs =async()=>{
        const url ='https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=t22RKYS2UQd8mjThrSOpsPiVE5miXdMZ'
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifts = data.map(img=>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifts)
    }

    getGifs();


    return(
        <div>
            <h3>{category}</h3>

        </div>
    )
}