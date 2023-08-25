import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ImageDetail() {
    const { imageId } = useParams(); // 여기서 videoId를 얻습니다.
    const [image, setImage] = useState(null);
    const BASE_URL = 'http://localhost:8080/images';

    useEffect(() => {
        axios.get(`${BASE_URL}/${imageId}`)
        .then(response => {
            setImage(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error fetching the video:", error);
        });
    }, [imageId]);

    if(!image) return <div>Loading...</div>;

    return (
        <div>
            <div className="w-96 h-96 bg-no-repeat absolute rotate-[144deg] opacity-40 bg-gradient-to-l from-purple-600 via-sky-400 to-lime-400 blur-3xl" /> {/*배경*/}
            <div className="w-96 h-96 absolute top-[10px] right-[100px] rotate-[-124deg] opacity-20 bg-gradient-to-l from-sky-400 to-lime-400 blur-3xl items-center justify-center" /> {/*배경*/}
            <div className='h-36'></div>
            <main className="px-[20%] justify-center items-center">
                <div className='flex'>
                    <div className='w-600px'>
                        <h1 className='pb-5 text-bold underline '># {image.originalTags}</h1>
                        <div className='bg-neutral-200 rounded-xl p-5'>
                            <img src={image.originalPaths}/>
                        </div>                 
                    </div>
                    <div className='w-10 h-10'></div>
                    <div className='w-600px'>
                        <h1 className='pb-5 text-bold underline '># {image.convertedTags}</h1>
                        <div className='bg-neutral-200 rounded-xl p-5'>
                            <img  src={image.convertedPaths}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ImageDetail;
