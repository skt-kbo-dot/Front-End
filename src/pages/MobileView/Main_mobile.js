import { useNavigate} from 'react-router-dom'

export default function Main() {

    const random1 = Math.floor(Math.random()*(4-1)+1);
    const navigate = useNavigate();

    return(
        <div>
            <main className="w-full">
                <video playsInline src={"https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.hdr.sml."+random1+".mp4"} muted autoPlay loop />
                <div className="w-[100%] h-96 bg-no-repeat absolute rotate-[144deg] opacity-40 bg-gradient-to-l from-purple-600 via-sky-400 to-lime-400 blur-3xl" /> {/*배경*/}
                <div className="w-[100%] h-96 absolute top-[10px] right-[0] rotate-[-124deg] opacity-20 bg-gradient-to-l from-sky-400 to-lime-400 blur-3xl items-center justify-center" /> {/*배경*/}

                <div className="px-[5%] w-[100%]">
                    <div className='w-[100%]'>
                        <section class="cell cell--com">
                        <h2 class="cell__hd cell__hd--com" role="text">대화</h2>
                        <p class="cell__txt cell__txt--com" role="text">대화할수록<br/>똑똑해지는 AI 대화</p>
                        <video playsinline src={"https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.com.character.mp4"} muted autoPlay loop/>
                        <div id="com" class="com com--pop" aria-hidden="true">
                            <i id="com-bbl-1" class="com__bbl com__bbl--1">더 글로리 개봉했어</i>
                            <i id="com-bbl-2" class="com__bbl com__bbl--2">나른한 오후에 이 노래 들어봐</i>
                            <i id="com-bbl-3" class="com__bbl com__bbl--3">봄봄, 드라마 좋아하지?</i>
                            <i id="com-bbl-4" class="com__bbl com__bbl--4">오늘은 출근할 때 우산 꼭 챙겨</i>
                        </div>
                        </section>
                    </div>
                </div>


                <div className="px-[5%] w-[100%] relative">
                    <div className="w-[100%] bg-slate-200 rounded-3xl">
                        <div className="px-9 pt-9 w-[100%] h-5 text-gray-500 text-base font-bold leading-snug">캐릭터</div>
                        <div className="px-9 pt-5 text-neutral-800 text-2xl font-bold leading-9">볼 때마다 귀여워 나만의 캐릭터</div>
                        <img className="w-[100%] bottom-[0px]" src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.ctr.character.webp"/>
                    </div>
                </div>


                <div className="px-[5%] py-[5px] w-[100%] relative" onClick={()=>{navigate('/shorts')}}>
                    <div className='w-[100%] bg-rose-600 rounded-3xl'>
                        <div className="px-9 pt-9 w-[100%] h-5 text-gray-300 text-base font-bold leading-snug">Style Shorts</div>
                        <div className="px-9 pt-5 text-white text-2xl font-bold leading-9">KBO 명장면에 AI한숟가락<br/>스타일 쇼츠</div>
                        <img className="w-[150px]" src="https://kbodot.s3.ap-northeast-2.amazonaws.com/logo_banner/banner1.png"></img>
                    </div>
                </div>

                <div className="px-[5%] py-[5px] w-[100%] relative" onClick={()=>{navigate('/images')}}>
                    <div className='w-[100%] bg-blue-300 rounded-3xl '>
                        <div className="px-9 pt-9 w-[100%] h-5 text-gray-500 text-base font-bold leading-snug">Photo-cut</div>
                        <div className="px-9 pt-5 text-black text-2xl font-bold leading-9">색다른 명장면을 찰칵!📸<br/>AI 포토컷</div>
                        <div className='flex flex-col items-center'>
                            <img className="w-[150px]" src="https://kbodot.s3.ap-northeast-2.amazonaws.com/logo_banner/banner1.png"></img>
                        </div>
                    </div>
                </div>

                <div className="px-[5%] py-[5px] w-[100%] relative" > {/*onClick={()=>{navigate('/stores')}} */}
                    <div className='w-[100%] bg-zinc-400 rounded-3xl '>
                        <div className="px-9 pt-9 w-[100%] h-5 text-gray-300 text-base font-bold leading-snug">KBO Store</div>
                        <div className="px-9 pt-5 text-white text-2xl font-bold leading-9">KBO선수들을 내폰에<br/>KBO Store</div>
                        <div className='flex flex-col items-end'>
                            <img className="w-[150px]" src="https://kbodot.s3.ap-northeast-2.amazonaws.com/logo_banner/banner1.png"></img>
                        </div>
                    </div>
                </div>
                
                <div className="px-[5%] py-[5px] w-[100%] relative">
                    <div className="w-[100%] bg-fuchsia-700 rounded-3xl relative">
                        <div className="px-9 pt-9 w-[100%] h-5 text-gray-300 text-base font-bold leading-snug">포토</div>
                        <div className="px-9 pt-5 text-white text-2xl font-bold leading-9">막 찍어도 인생샷<br/>AI 사진 편집</div>
                        <div className='flex flex-col items-center'>
                            <img className="w-[200px]" src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.pto.character.1.webp" />
                        </div>
                    </div>
                </div>
                
                <div className="px-[5%] py-[5px] w-[100%] relative">
                    <div className="w-[100%] bg-slate-200 rounded-3xl relative">
                        <div className="px-9 pt-9 w-[100%] h-5 text-gray-500 text-base font-bold leading-snug">루틴/일정알림</div>
                        <div className="px-9 pt-9 text-neutral-800 text-2xl font-bold leading-9">스마트한 일상의 시작<br/>AI LIFE</div>
                        <img className="" src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.routine.marquee.webp" />
                    </div>
                </div>
                

                <div className="px-[5%] py-[5px] w-[100%] relative">
                    <div className="w-[100%] bg-slate-900 rounded-3xl relative">
                        <div className="w-[100%] h-5 px-5 pt-5 text-gray-300 text-base font-bold leading-snug">프렌즈</div>
                        <div className="px-5 pt-5 text-white text-2xl font-bold leading-9">엉뚱발랄<br/>나만의 AI 친구들
                        </div>
                        <img src="https://cdn.sktapollo.com/developers/poc/app.apollo.agent/static/home2/a.fnd.illust.small.webp"></img>
                    </div>
                </div>

                <div className="px-[2%] h-60">
                <div className="h-20"></div>
                <span className="text-bold text-2xl">Team.KBO-dot<br/></span>
                <span className="text-bold text-1xl">⭐️ MZ 세대가 “스낵 컬처” 형태로 야구를 Fun하게 즐길 수 있는 KBO-dot Team의 야구 Playground 플랫폼  </span>
                </div>
            </main>


        </div>
        
        
    )
}