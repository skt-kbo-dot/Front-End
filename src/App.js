import './App.css';
import './style.css';
import Main from './pages/BrowserView/Main'
import KBO_record from './pages/KBO_record'
import Styleshorts from './pages/BrowserView/Styleshorts/Styleshorts'
import Photocut from './pages/BrowserView/Photo-Cut/Photocut'
import KBO_store from './pages/BrowserView/KBO_store/KBO_store'
import Errorpage from './pages/errorpage'
import { Routes, Route, useNavigate, Link} from 'react-router-dom'
import Detail from './pages/BrowserView/KBO_store/detail'
import VideoDetail from './pages/BrowserView/Styleshorts/VideoDetail'
import ImageDetail from './pages/BrowserView/Photo-Cut/ImageDetail'




import Main_mobile from './pages/MobileView/Main_mobile'
import Styleshorts_mobile from './pages/MobileView/Styleshorts_mobile/Styleshort_mobile';
import VideoDetail_mobile from './pages/MobileView/Styleshorts_mobile/VideoDetail_mobile';
import Photocut_mobile from './pages/MobileView/Photo-Cut_mobile/Photocut_mobile';
import ImageDetail_mobile from './pages/MobileView/Photo-Cut_mobile/ImageDetail_mobile';





import store_item from './pages/BrowserView/KBO_store/store_item'
import { useState } from 'react';

import { BrowserView, MobileView } from 'react-device-detect'

function App() {
  let navigate = useNavigate();
  let [items] = useState(store_item);

  return (
    <div>
      <header>
        <BackButton className="absolute left-100 fixed "/>
          <div className="z-[100] w-[100%] h-20 bg-slate-300 backdrop-blur-xl bg-opacity-50 items-start inline-flex fixed">
              <div className="h-full object-contain p-2">
                  <Link to="/">
                      <img className="h-full" src='https://kbodot.s3.ap-northeast-2.amazonaws.com/logo_banner/a_logo.png' />
                  </Link>
              </div>
              <div className="w-[100%] text-center text-2xl xl:text-5xl lg:text-4xl md:text-3xl font-extrabold object-contain p-3">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                      내이름은 크보닷, 재밌죠
                  </span>
              </div>
          </div>
          <div className="w-[100%] h-20 justify-between items-start gap-96"></div>
          
      </header>
      <BrowserView>
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
      </BrowserView>
      <MobileView>
        <Routes>
          <Route path= '/' element ={<Main_mobile/>}/>
          <Route path= '/records' element = {<KBO_record/>}/>
          <Route path= '/shorts' element = {<Styleshorts_mobile/>}/>
          <Route path= "/shorts/:videoId" element={<VideoDetail_mobile />} />
          <Route path= '/images' element = {<Photocut_mobile/>}/>
          <Route path= "/images/:imageId" element={<ImageDetail_mobile />} />
          <Route path= '/stores' element = {<KBO_store/>}/>
          <Route path= '/stores/:id' element ={<Detail store_item={store_item}/>}/>
          <Route path= '*' element = {<Errorpage/>}/>
        </Routes>
      </MobileView>
    </div>
    

  );
}

export default App;

function BackButton() {
  const goBack = () => {
      window.history.back();
  }

  return (
      <button onClick={goBack} className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white text-bold px-4 py-2 rounded-full z-50 invisible md:visible">
          뒤로<br/>가기
      </button>
  );
}