import React from "react";
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

export default function Photocut() {
    return (
        <div>
            <header>
                <div className="z-[100] w-[100%] h-20 bg-slate-300 backdrop-blur-md bg-opacity-50 items-start inline-flex fixed">
                <Link to="/">
                    <img className="w-4.8 h-4.8 relative px-5 pt-5" src='image/a_logo.png' />
                </Link>
                <div className="text-5xl font-extrabold">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    온가족이 함께 하는 내이름은 크보닷
                    </span>
                </div>
                </div>
                <div className="w-[100%] h-20 justify-between items-start gap-96"></div>
            </header>
            <div className="w-96 h-96 absolute right-0 rotate-[-124deg] opacity-20 bg-gradient-to-l from-sky-400 to-lime-400 blur-3xl" />
            <div className="w-96 h-96 bg-no-repeat absolute rotate-[144deg] opacity-40 bg-gradient-to-l from-purple-600 via-sky-400 to-lime-400 blur-3xl" />

            <main>
                <video controls>
                    <source src="http://3.36.238.142:8080/video/abc.mp4" />
                </video>
            </main>
            <div className='flex flex-row mb-10 absolute animate-slider'>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
            </div>
        </div>
    )
}