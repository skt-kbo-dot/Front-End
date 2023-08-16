import React from "react";

export default function Main() {

  const random1 = Math.floor(Math.random()*(4-1)+1);
  
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="w-344 bg-[#000333] row-span-2 rounded-3xl">
              <div className='pt-[45%]'>
                <video muted autoPlay loop className='static'>
                  <source src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.com.character.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="w-14 h-5 ps-5 left-[36px] top-[36px] absolute">
                <div className="w-[100%] h-5 text-gray-400 text-base font-bold leading-snug">대화</div>
              </div>
              <div className=" pb-px top-[65px] ps-5 absolute justify-start items-start inline-flex">
                <div className="text-white text-2xl font-bold leading-9">대화할수록<br/>똑똑해지는 AI 대화</div>
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

          <div className="w-344 h-344 ps-5 pt-5 bg-slate-900 col-span-2 rounded-3xl">
            <div className="w-[100%] h-5 text-gray-300 text-base font-bold leading-snug">A. tv</div>
            <div className="text-white text-2xl font-bold leading-9">지금은 2023<br/>프로야구 생중계 중!</div>
            <img className="w-20 h-20 " src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.baseball.ball.webp" />
            <img className="w-40 h-44 " src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.baseball.bat.webp" />
          </div>

          <div className="relative w-344 h-344 pb-52 bg-rose-600 rounded-3xl flex-col justify-start items-start inline-flex">
            <div className="px-9 pt-9 w-[100%] h-5 text-gray-300 text-base font-bold leading-snug">Style Shorts</div>
            <div className="px-9 pt-5 text-white text-2xl font-bold leading-9">KBO 명장면에 AI한숟가락<br/>스타일 쇼츠</div>
            <img className="absolute bottom-0" src="image/banner1.png"></img>
          </div>

          <div className="relative w-344 h-344 pb-52 bg-blue-300 rounded-3xl flex-col justify-start items-start inline-flex">
            <div className="px-9 pt-9 w-[100%] h-5 text-gray-500 text-base font-bold leading-snug">Photo-cut</div>
            <div className="px-9 pt-5 text-black text-2xl font-bold leading-9">색다른 명장면을 찰칵!📸<br/>AI 포토컷</div>
            <img className="absolute bottom-0" src="image/banner1.png"></img>
          </div>

          <div className="relative w-344 h-344 pb-52 bg-zinc-400 rounded-3xl flex-col justify-start items-start inline-flex">
            <div className="px-9 pt-9 w-[100%] h-5 text-gray-300 text-base font-bold leading-snug">KBO Store</div>
            <div className="px-9 pt-5 text-black text-2xl font-bold leading-9">KBO선수들을 내폰에<br/>KBO Store</div>
            <img className="absolute bottom-0" src="image/banner1.png"></img>
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
      <div className='flex flex-row mb-10 absolute animate-slider'>
        <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
        <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
        <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.footer.band.webp"></img>
      </div>

    </div>
  );
}