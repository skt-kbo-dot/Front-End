import './App.css';
import Main from './pages/Main'
import KBO_record from './pages/KBO_record'
import Styleshorts from './pages/Styleshorts'
import Photocut from './pages/Photocut'
import KBO_store from './pages/KBO_store'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'


function App() {
  let navigate = useNavigate();

  return (
    <Routes>
      <Route path= '/' element ={<Main/>}/>
      <Route path= '/records' element = {<KBO_record/>}/>
      <Route path= '/shorts' element = {<Styleshorts/>}/>
      <Route path= '/images' element = {<Photocut/>}/>
      <Route path= '/stores' element = {<KBO_store/>}/>
    </Routes>

  );
}

export default App;
