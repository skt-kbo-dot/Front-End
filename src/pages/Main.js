import App from "../App";
import React from "react";
import { Routes, Route, Link, useNavigate} from 'react-router-dom'

export default function Main() {

  const random1 = Math.floor(Math.random()*(4-1)+1);
  const navigate = useNavigate();
  


  return (
    <div>
      <header>
        <div className="z-[100] w-[100%] h-20 bg-slate-300 backdrop-blur-md bg-opacity-50 items-start inline-flex fixed">
          <img className="w-4.8 h-4.8 relative px-5 pt-5" src='image/a_logo.png' />
          <div className="text-5xl font-extrabold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              온가족이 함께 하는 내이름은 크보닷
            </span>
          </div>
        </div>
        <div className="w-[100%] h-20 justify-between items-start gap-96"></div>
      </header>
      
      <main>
        <div className="w-96 h-96 absolute rotate-[-124deg] opacity-20 bg-gradient-to-l from-sky-400 to-lime-400 blur-3xl" />
        <video muted autoPlay loop className="w-[1800px] h-[488px]">
          <source src={"https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.hdr.lrg."+random1+".mp4"} type="video/mp4" className='border-0 outline-0'/>
        </video>
        <div className="w-96 h-96 bg-no-repeat absolute rotate-[144deg] opacity-40 bg-gradient-to-l from-purple-600 via-sky-400 to-lime-400 blur-3xl" />

        <div className="grid grid-cols-3 grid-rows-4 gap-4">
          <div className="w-344 bg-[#000333] row-span-2 rounded-3xl">
              <div className=''>
                <section class="cell cell--com">
                  <h2 class="cell__hd cell__hd--com" role="text">대화</h2>
                  <p class="cell__txt cell__txt--com" role="text">대화할수록<br/>똑똑해지는 AI 대화</p>
                  <video muted autoPlay loop className='static'>
                      <source src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.com.character.mp4" type="video/mp4"/>
                  </video>
                  <div id="com" class="com com--pop" aria-hidden="true">
                      <i id="com-bbl-1" class="com__bbl com__bbl--1">더 글로리 개봉했어</i>
                      <i id="com-bbl-2" class="com__bbl com__bbl--2">나른한 오후에 이 노래 들어봐</i>
                      <i id="com-bbl-3" class="com__bbl com__bbl--3">봄봄, 드라마 좋아하지?</i>
                      <i id="com-bbl-4" class="com__bbl com__bbl--4">오늘은 출근할 때 우산 꼭 챙겨</i>
                  </div>
                </section>
              </div>
            <div className="w-344 h-344 relative bg-slate-900 rounded-3xl">
            </div>
          </div>
          
          <div className="w-344 h-344 bg-slate-200 col-span-2 rounded-3xl relative">
            <div className="w-96 h-5 relative top-[36px]">
              <div className="w-[100%] h-5 left-[28px] top-0 absolute text-gray-500 text-base font-bold leading-snug">캐릭터</div>
            </div>
            <div className="top-[65px] ps-5 absolute justify-start items-start inline-flex">
              <div className="text-neutral-800 text-2xl font-bold leading-9">볼 때마다 귀여워 나만의 캐릭터</div>
            </div>
            <img className="absolute bottom-0" src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.ctr.character.webp"/>
            <div className="w-[100%] h-[100%] px-9 pt-9 pb-60 rounded-3xl flex-col justify-start items-start gap-1.5 inline-flex">
              
              
            </div>
          </div>


          <div className="cell col-span-2 bg-slate-900 rounded-3xl">
            <Link to="/records">
              <div className="">
                <h2 className="cell__hd cell__hd--atv bg-slate-900" role="text"><span aria-label="에이닷">A.</span> tv</h2>
                <p className="cell__txt cell__txt--atv bg-slate-900" role="text">지금은 2023<br/>프로야구 생중계 중!</p>
                <div id="baseball" className="baseball">
                    <i id="baseball-ground" class="baseball__img baseball__img--ground">
                        <img class="baseball__ground" src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.baseball.ground.webp" alt=""/>
                    </i>
                    <i id="baseball-ball" class="baseball__img baseball__img--ball"></i>
                    <i id="baseball-bat" class="baseball__img baseball__img--bat"></i>
                </div>
              </div>
            </Link>
          </div>


          <div className="relative w-344 h-344 pb-52 bg-rose-600 rounded-3xl flex-col justify-start items-start inline-flex">
            <Link to="/shorts">
              <div className="px-9 pt-9 w-[100%] h-5 text-gray-300 text-base font-bold leading-snug">Style Shorts</div>
              <div className="px-9 pt-5 text-white text-2xl font-bold leading-9">KBO 명장면에 AI한숟가락<br/>스타일 쇼츠</div>
              <img className="absolute bottom-0" src="image/banner1.png"></img>
            </Link>
          </div>

          <div className="relative w-344 h-344 pb-52 bg-blue-300 rounded-3xl flex-col justify-start items-start inline-flex">
            <Link to="/images">
              <div className="px-9 pt-9 w-[100%] h-5 text-gray-500 text-base font-bold leading-snug">Photo-cut</div>
              <div className="px-9 pt-5 text-black text-2xl font-bold leading-9">색다른 명장면을 찰칵!📸<br/>AI 포토컷</div>
              <img className="absolute bottom-0" src="image/banner1.png"></img>
            </Link>
          </div>

          <div className="relative w-344 h-344 pb-52 bg-zinc-400 rounded-3xl flex-col justify-start items-start inline-flex">
            <Link to="/stores">
              <div className="px-9 pt-9 w-[100%] h-5 text-gray-300 text-base font-bold leading-snug">KBO Store</div>
              <div className="px-9 pt-5 text-white text-2xl font-bold leading-9">KBO선수들을 내폰에<br/>KBO Store</div>
              <img className="absolute bottom-0" src="image/banner1.png"></img>
            </Link>
          </div>

          <div className="w-344 h-344 pb-52 bg-fuchsia-700 rounded-3xl flex-col justify-start items-start gap-1.5 inline-flex relative">
            <div className="w-96 h-5 relative top-[36px]">
              <div className="w-[100%] h-5 left-[28px] top-0 absolute text-gray-300 text-base font-bold leading-snug">포토</div>
            </div>
            <div className="top-[65px] ps-5 absolute justify-start items-start inline-flex">
              <div className="z-10 text-white text-2xl font-bold leading-9">막 찍어도 인생샷<br/>AI 사진 편집</div>
            </div>
            <img className="absolute bottom-0" src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.pto.character.1.webp" />
          </div>
          
          <div className="relative w-344 h-344 pb-52 bg-slate-200 rounded-3xl flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="px-9 pt-9 w-[100%] h-5 text-gray-500 text-base font-bold leading-snug">루틴/일정알림</div>
            <div className="px-9 pt-9 text-neutral-800 text-2xl font-bold leading-9">스마트한 일상의 시작<br/>AI LIFE</div>
            <img className="absolute bottom-0" src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.routine.marquee.webp"></img>
          </div>

          <div className="w-344 h-344 bg-slate-900 rounded-3xl flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="w-[100%] h-5 px-5 pt-5 text-gray-300 text-base font-bold leading-snug">프렌즈</div>
            <div className="px-5 pt-5 text-white text-2xl font-bold leading-9">엉뚱발랄<br/>나만의 AI 친구들
            </div>
            <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.fnd.illust.small.webp"></img>
          </div>
        </div>
      </main>

      <div className="w-[100%] h-60">
          <span className="">bottom_banner</span>
      </div>

      <div className='flex flex-row mb-10 absolute animate-slider'>
        <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
        <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
        <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
      </div>

    </div>
  );
}