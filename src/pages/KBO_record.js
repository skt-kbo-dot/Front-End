import React from "react";
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function KBO_record() {
    return (
        <div>
            <div className="w-96 h-96 absolute right-0 rotate-[-124deg] opacity-20 bg-gradient-to-l from-sky-400 to-lime-400 blur-3xl" />
            <div className="w-96 h-96 bg-no-repeat absolute rotate-[144deg] opacity-40 bg-gradient-to-l from-purple-600 via-sky-400 to-lime-400 blur-3xl" />

            <main>
                <div className="px-[20%]">
                    <div className="w-[100%] h-96">
                        <div className="w-[100%] h-80 text-center text-5xl font-extrabold object-contain p-10">
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                에이닷. 프로야구
                            </span>
                        </div>
                    </div>

                    <div className="w-[1920px] h-[100px]" />
                    <div className="w-[100%] h-64 relative bg-blue-200 rounded-3xl">
                        <div className="pt-5 pl-5 text-black text-2xl font-bold">캘린더</div>
                        <div className="w-[90%] h-44 left-[5%] top-[62px] absolute bg-white rounded-3xl">
                            <div className="w-60 h-16 left-[323px] top-[-3px] absolute text-center text-black text-3xl font-bold">2023년 8월</div>
                        </div>
                    </div>
                    <div className="w-[100%] grid grid-cols-2 gap-1 pt-1">
                        <div className="w-[100%] h-[100%] relative bg-neutral-200 rounded-3xl">
                            <div className="pt-5 pl-5 text-black text-2xl font-bold">경기일정</div>
                            <div className="content-center">
                                <div className="w-[95%] h-36 bg-white rounded-2xl">
                                </div>
                                <div className="w-[95%] h-36 bg-white rounded-2xl">
                                </div>
                                <div className="w-[95%] h-36 bg-white rounded-2xl">
                                </div>

                            </div>
                        </div>
                        <div className="w-[100%] h-[100%] relative bg-neutral-200 rounded-3xl">
                        </div>
                    </div>
                </div>
            </main>
            <div className='flex flex-row mb-10 absolute animate-slider'>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
                <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
            </div>
        </div>
    )
}

export default KBO_record;