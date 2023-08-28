import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ImageDetail() {
    const { imageId } = useParams(); // 여기서 videoId를 얻습니다.
    const [image, setImage] = useState(null);
    const BASE_URL = 'http://43.202.126.121:8080/images';
    //const BASE_URL = 'http://localhost:8080/images';

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
            <div className='h-20'></div>
            <main className="justify-center items-center">
                <div className=''>
                    <div className='w-[100%]'>
                        <h1 className='pb-5 text-bold underline '>{image.originalTags}</h1>
                        <div className='bg-neutral-200 rounded-xl p-2'>
                            <img src={image.originalPaths}/>
                        </div>
                    </div>
                    <div className='w-10 h-10'></div>
                    <div className='w-[100%]'>
                        <h1 className='pb-5 text-bold underline '>{image.convertedTags}</h1>
                        <div className='bg-neutral-200 rounded-xl p-2'>
                            <img  src={image.convertedPaths}/>
                        </div>
                    </div>
                </div>
            </main>
            <div className='h-20'></div>
        </div>
    );
}

export default ImageDetail;

