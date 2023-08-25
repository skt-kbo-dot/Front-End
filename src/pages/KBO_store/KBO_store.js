import React, { useState , useParams} from "react";
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import item_data from './store_item.js';
import axios from 'axios';

export default function Kbo_store() {

    let [item] = useState(item_data)

    return (
        <div>
            <div className="w-96 h-96 bg-no-repeat absolute rotate-[144deg] opacity-40 bg-gradient-to-l from-purple-600 via-sky-400 to-lime-400 blur-3xl" /> {/*배경*/}
            <div className="w-96 h-96 absolute top-[10px] right-[100px] rotate-[-124deg] opacity-20 bg-gradient-to-l from-sky-400 to-lime-400 blur-3xl items-center justify-center" /> {/*배경*/}
            <div className="w-[100%] h-80 text-center text-5xl font-extrabold object-contain p-10">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    KBO Store
                </span>
            </div>
            <main>
                <div className="grid grid-col-4 gap-20">
                    {item.map((a, i)=>{
                        return (
                            <Card item={item[i]} i={i}/>
                        )
                    })}
                </div>
                <button onClick={()=> {
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((data)=>{
                        console.log(data.data)
                    })
                }}>버튼</button>
            </main>
            <div className='flex flex-row mb-10 absolute animate-slider'>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
            </div>
        </div>
    )
}

function Card(props) {
    let navigate = useNavigate()

    return (
        <div onClick={() => {navigate('/stores/' + props.i)}}>
            <div className="aspect-w-1 aspect-h-1">
                <img src={"./sampleimage/"+ props.i + ".jpeg"}/>
            </div>
            <h5 className="text-2xl text-bold">{props.item.title}</h5>
            <p>{props.item.content}</p>
        </div>
    )
}