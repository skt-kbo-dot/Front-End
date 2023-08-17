import React, {useState} from "react";
import { Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import { Datepick, Item_list } from "../components/mycomponents";

export default function Styleshorts() {
    const location = useLocation();
    const queryString = location.pathname;
    
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

            <main className="px-[20%]">
                <a>
                    {queryString}
                </a>
                
                <div className="w-[100%] h-96">
                    <span className="">top_banner</span>
                </div>
                <div className="w-[100%] grid grid-cols-5 grid-rows-2 gap-4">
                    <Link to={queryString + "?teamCode=SK"}><div><img className="" src="image/team/1_ssg_랜더스_logo 1.png" /></div></Link>
                    <Link to={queryString + "?teamCode=WO"}><div><img className="" src="image/team/2_키움_히어로즈_logo 1.png" /></div></Link>
                    <Link to={queryString + "?teamCode=LG"}><div><img className="" src="image/team/3_lg_트윈스_logo 1.png" /></div></Link>
                    <Link to={queryString + "?teamCode=KT"}><div><img className="" src="image/team/4_kt_위즈_logo 1.png" /></div></Link>
                    <Link to={queryString + "?teamCode=HT"}><div><img className="" src="image/team/5_kia_타이거즈_logo 1.png" /></div></Link>
                    <Link to={queryString + "?teamCode=NC"}><div><img className="" src="image/team/6_nc_다이노스_logo 1.png" /></div></Link>
                    <Link to={queryString + "?teamCode=SS"}><div><img className="" src="image/team/7_삼성_라이온즈_logo 1.png" /></div></Link>
                    <Link to={queryString + "?teamCode=LT"}><div><img className="" src="image/team/8_롯데_자이언트_logo 1.png" /></div></Link>
                    <Link to={queryString + "?teamCode=OB"}><div><img className="" src="image/team/9_두산_베어스_logo 1.png" /></div></Link>
                    <Link to={queryString + "?teamCode=HH"}><div><img className="" src="image/team/10_한화_이글스_logo 1.png" /></div></Link>
                </div>
                <div className="w-[100%] pb-5 bg-neutral-200 rounded-3xl flex-col justify-start items-start inline-flex relative z-10">
                    <div className="pt-5 pl-5 text-center text-black text-3xl font-bold ">경기 날짜</div>
                    <div className="w-[96%] pt-5 relative bg-white rounded-3xl absolute inset-[2%]">
                        <div className="w-[96%] relative bg-white rounded-3xl absolute inset-[2%] flex justify-center items-center">
                            <Datepick />
                        </div>
                        
                        
                    </div>
                </div>
                <div className="w-[100%] h-[600px] relative bg-neutral-200 rounded-3xl top-3">
                    <div className="w-[96%] h-[96%] relative bg-white rounded-3xl absolute inset-[2%]">
                        <div className="w-96 h-60 relative">
                            <img className="w-[200px] h-[174px] left-[25px] top-[24px] absolute bg-zinc-300 rounded-2xl" src="image/team/10_한화_이글스_logo 1.png"/>
                            <div className="left-[381px] top-[55px] absolute text-black text-5xl font-normal">text</div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="w-[100%] h-96">
                <span className="">bottom_banner</span>
            </div>


            <div className='flex flex-row mb-10 absolute animate-slider'>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
            </div>
        </div>
    )
}