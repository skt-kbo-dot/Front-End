import './App.css';
import './style.css';
import Main from './pages/Main'
import KBO_record from './pages/KBO_record'
import Styleshorts from './pages/Styleshorts/Styleshorts'
import Photocut from './pages/Photo-Cut/Photocut'
import KBO_store from './pages/KBO_store/KBO_store'
import Errorpage from './pages/errorpage'
import { Routes, Route, useNavigate, Link} from 'react-router-dom'
import Detail from './pages/KBO_store/detail'
import VideoDetail from './pages/Styleshorts/VideoDetail'
import ImageDetail from './pages/Photo-Cut/ImageDetail'

import store_item from './pages/KBO_store/store_item'
import { useState } from 'react';

function App() {
  let navigate = useNavigate();
  let [items] = useState(store_item);

  return (
    <div>
      <header>
          <div className="z-[100] w-[100%] h-20 bg-slate-300 backdrop-blur-md bg-opacity-50 items-start inline-flex fixed">
              <div className="h-full object-contain p-2">
                  <Link to="/">
                      <img className="h-full" src='https://i.ibb.co/fFWg03T/kbodoticon.png' />
                  </Link>
              </div>
              <div className="w-[100%] text-center text-2xl xl:text-5xl lg:text-4xl md:text-3xl font-extrabold object-contain p-3">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                      온가족이 함께 하는 내이름은 크보닷
                  </span>
              </div>
          </div>
          <div className="w-[100%] h-20 justify-between items-start gap-96"></div>
          <BackButton className="absolute left-100 fixed"/>

          
      </header>

      <Routes>
      <Route path= '/' element ={<Main/>}/>
      <Route path= '/records' element = {<KBO_record/>}/>
      <Route path= '/shorts' element = {<Styleshorts/>}/>
      <Route path= "/shorts/:videoId" element={<VideoDetail />} />
      <Route path= '/images' element = {<Photocut/>}/>
      <Route path= "/images/:imageId" element={<ImageDetail />} />
      <Route path= '/stores' element = {<KBO_store/>}/>
      <Route path= '/stores/:id' element ={<Detail store_item={store_item}/>}/>
      <Route path= '*' element = {<Errorpage/>}/>
    </Routes>
    </div>
    

  );
}

export default App;

function BackButton() {
  const goBack = () => {
      window.history.back();
  }

  return (
      <button onClick={goBack} className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white text-bold px-4 py-2 rounded-full">
          뒤로<br/>가기
      </button>
  );
}