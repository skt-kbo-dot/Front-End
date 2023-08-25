import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Photocut() {
    const [images, setImages] = useState([]);
    const [teamCode, setTeamCode] = useState(null);
    const [date, setDate] = useState(null);
    const BASE_URL = 'http://localhost:8080/images';

    useEffect(() => {
        axios.get(BASE_URL).then(response => 
            setImages(response.data));
    }, []);

    const handleTeamClick = (code) => {
        setTeamCode(code);
    };

    const handleFetch = () => {
        let url = BASE_URL;
    
        if (teamCode && date) {
            url += `?teamCode=${teamCode}&date=${date}`;
        } else if (date == null){
            url += `?teamCode=${teamCode}`;
        } else {
            alert('해당이미지이없습니다');
        }
    
        axios.get(url).then(response => {
          if(response.data.length === 0){
            alert('해당이미지이없습니다');
          } else {
            setImages(response.data);
          }
        });
    };

    const handleReset = () => {
        axios.get(BASE_URL).then(response => {
          setImages(response.data);
        });
    };

    return (
        <div>
            <div className="w-96 h-96 bg-no-repeat absolute rotate-[144deg] opacity-40 bg-gradient-to-l from-purple-600 via-sky-400 to-lime-400 blur-3xl" /> {/*배경*/}
            <div className="w-96 h-96 absolute top-[10px] right-[100px] rotate-[-124deg] opacity-20 bg-gradient-to-l from-sky-400 to-lime-400 blur-3xl items-center justify-center" /> {/*배경*/}
            <div className="w-[100%] h-80 text-center text-5xl font-extrabold object-contain p-10">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Photo-Cut
                </span>
            </div>
            <main className="px-[20%] flex justify-center items-center">
                <div className="">
                    <div className="w-[600px] grid grid-cols-5 grid-rows-2 gap-4">
                    <button className="" onClick={() => handleTeamClick('SK')}><img className="" src="image/team/1_ssg_랜더스_logo 1.png" alt="SSG 랜더스"/></button>
                        <button className="" onClick={() => handleTeamClick('WO')}><img className="" src="image/team/2_키움_히어로즈_logo 1.png" alt="키움 히어로즈"/></button>
                        <button className="" onClick={() => handleTeamClick('LG')}><img className="" src="image/team/3_lg_트윈스_logo 1.png" alt="LG 트윈즈"/></button>
                        <button className="" onClick={() => handleTeamClick('KT')}><img className="" src="image/team/4_kt_위즈_logo 1.png" alt="KT 위즈"/></button>
                        <button className="" onClick={() => handleTeamClick('HT')}><img className="" src="image/team/5_kia_타이거즈_logo 1.png" alt="KIA 타이거즈"/></button>
                        <button className="" onClick={() => handleTeamClick('NC')}><img className="" src="image/team/6_nc_다이노스_logo 1.png" alt="NC 다이노스"/></button>
                        <button className="" onClick={() => handleTeamClick('SS')}><img className="" src="image/team/7_삼성_라이온즈_logo 1.png" alt="삼성 라이온즈"/></button>
                        <button className="" onClick={() => handleTeamClick('LT')}><img className="" src="image/team/8_롯데_자이언트_logo 1.png" alt="롯데 자이언트"/></button>
                        <button className="" onClick={() => handleTeamClick('OB')}><img className="" src="image/team/9_두산_베어스_logo 1.png" alt="두산 베이스"/></button>
                        <button className="" onClick={() => handleTeamClick('HH')}><img className="" src="image/team/10_한화_이글스_logo 1.png" alt="한화 이글스"/></button>
                    </div>
                    <div className="w-[100%] pb-5 bg-neutral-200 rounded-xl flex-col justify-start items-start inline-flex relative z-10">
                        <p className="pt-5 pl-5 text-center text-black text-xl font-bold ">경기 날짜</p>
                        <div className="w-[96%] relative bg-white rounded-xl inset-[2%] flex items-stretch p-3">
                            <div className="flex ">
                                <div>
                                    <p className="w-150">선택된 팀: {getTeamName(teamCode)}</p>
                                </div>
                                <div>
                                    <DatePicker className="w-150 px-1 py-1" selected={date} onChange={(date) => setDate(date)} dateFormat="yyyyMMdd" />
                                </div>
                                <div className="flex absolute right-2">
                                    <button onClick={handleFetch} title="호출" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:border-blue-900">호출</button>
                                    <div className="w-3"></div>
                                    <button onClick={handleReset} title="리셋" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:border-blue-900">리셋</button>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div className="w-[100%] h-[600px] relative bg-neutral-200 rounded-xl top-3">
                        <div className="w-[96%] h-[96%] relative bg-white rounded-xl absolute inset-[2%] overflow-y-scroll">
                            <div className="w-full grid grid-cols-3 gap-3">
                                {images.map(image => (
                                    <div key={image.ImageId} className="relative pb-1/1" onClick={() => window.location.href = `/images/${image.imageId}`}>
                                        <img src={image.originalPath} alt="" className="absolute inset-0 w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
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
            <div className="w-[100%] h-100">
                <div className="">bottom_banner</div>
            </div>
        </div>
    )
}

const TEAM_NAMES = {
    'SK': 'SSG 랜더스',
    'LG': 'LG 트윈스',
    'WO': '키움 히어로즈',
    'KT': 'KT 위즈',
    'HT': 'KIA 타이거즈',
    'NC': 'NC 다이노스',
    'SS': '삼성 라이온즈',
    'LT': '롯데 자이언트',
    'OB': '두산 베이스',
    'HH': '한화이글스'
};
function getTeamName(teamCode) {
    return TEAM_NAMES[teamCode] || '선택되지않음';
}

function image_preprocess(sourece_path) {
    return (
        <img src={sourece_path} alt="" className="absolute w-full h-w object-cover" />
    )
}