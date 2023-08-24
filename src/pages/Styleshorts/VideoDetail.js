import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function VideoDetail() {
    const { videoId } = useParams(); // 여기서 videoId를 얻습니다.
    const [video, setVideo] = useState(null);
    const BASE_URL = 'http://localhost:8080/shorts';

    useEffect(() => {
        axios.get(`${BASE_URL}/${videoId}`)
        .then(response => {
            setVideo(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error fetching the video:", error);
        });
    }, [videoId]);

    if(!video) return <div>Loading...</div>;

    return (
        <div>
            <div className="w-96 h-96 bg-no-repeat absolute rotate-[144deg] opacity-40 bg-gradient-to-l from-purple-600 via-sky-400 to-lime-400 blur-3xl" /> {/*배경*/}
            <div className="w-96 h-96 absolute top-[10px] right-[100px] rotate-[-124deg] opacity-20 bg-gradient-to-l from-sky-400 to-lime-400 blur-3xl items-center justify-center" /> {/*배경*/}
            <div className='h-36'></div>
            <main className="px-[20%] justify-center items-center">
                <h1 className='pb-5 text-bold underline '># {video.title}</h1>
                <div className="p-5 bg-neutral-200 rounded-xl flex-col justify-start items-start inline-flex relative z-10">
                    <video controls className='max-h-200px'>
                        <source src={video.videoPath}/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </main>
        </div>
    );
}

export default VideoDetail;
