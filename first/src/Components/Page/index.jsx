import React, { useEffect, useState } from "react";
import "./style.css"
import Pizza1 from "../../assets/images/02.jpg"
import Pizza2 from "../../assets/images/02.jpg"
import Pizza3 from "../../assets/images/02.jpg"
import Salad1 from "../../assets/images/salad1.jpg"
import Salad2 from "../../assets/images/salad2.jpg"
import Salad3 from "../../assets/images/salad3.jpg"
import Noodle1 from "../../assets/images/noodle1.jpg"
import Noodle2 from "../../assets/images/noodle2.jpg"
import Noodle3 from "../../assets/images/noodle3.jpg"

export const Page = ()=>{
    const [buttons] = useState(["Pizza","Salad","Noodle"])
    const [g,setG] = useState("")
    const [typeFoods,setTypeFoods] = useState([])
    const [foods] = useState([
        {
            img: Pizza1,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Pizza"
        },
        {
            img: Pizza2,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Pizza"
        },
        {
            img: Pizza3,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Pizza"
        },
        {
            img: Salad1,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Salad"
        },
        {
            img: Salad2,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Salad"
        },
        {
            img: Salad3,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Salad"
        },
        {
            img: Noodle1,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Noodle"
        },
        {
            img: Noodle2,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Noodle"
        },
        {
            img: Noodle3,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Noodle"
        },
    ])
    useEffect(()=>{
        setTypeFoods(foods.filter(x=>x.type === "Pizza"))
        setG("Pizza")
    },[])

    const Filter = (y)=>{
        setTypeFoods(foods.filter(x=>x.type === y))
        setG(y)
    }


    return <div>
        <div className="buttons">
            {buttons.map((elem,index)=>{
                return <button className={elem===g? "FoodActive" : null} onClick={()=>Filter(elem)} key={index}>{elem}</button>
            })}
        </div>
        <div className="foods">
            {typeFoods.map((elem,index)=>{
                return <div key={index}>
                    <img src={elem.img} alt="nkar" />
                    <h2>{elem.title}</h2>
                    <p>{elem.description}</p>
                    <span>{elem.price}</span>
                </div>
            })}
        </div>
    </div>
}