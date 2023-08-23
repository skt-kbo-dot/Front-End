import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ImageDetail() {
    const { imageId } = useParams(); // 여기서 videoId를 얻습니다.
    const [image, setImage] = useState(null);
    const BASE_URL = 'https://c961abcf-9f24-4eab-9445-3dc20b0d09cb.mock.pstmn.io/images';

    useEffect(() => {
        axios.get(`${BASE_URL}/${imageId}`)
        .then(response => {
            setImage(response.data[0]);
            console.log(response.data[0]);
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
                <div className="w-[100%] p-5 bg-neutral-200 rounded-xl flex-col justify-start items-start inline-flex relative z-10">
                    <img src={image.originalPaths}/>
                    <img src={image.convertedPaths}/>
                    <h1>{image.originalTags}</h1>
                    <h1>{image.convertedTags}</h1>
                </div>
            </main>
        </div>
    );
}

export default ImageDetail;