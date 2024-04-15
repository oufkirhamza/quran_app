
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { Header } from './layouts/header';
import QuranRecitation from './pages/Audio/receiters';
import { Listen, ListenQuran } from './pages/Audio/listen';
function App() {
  return (
    <MyProvider>
      <Header/>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/quran/surah' element={<AboutPage />} />
        <Route path='/quran/receiters' element={<QuranRecitation />} />
        <Route path='/quran/receiter' element={<ListenQuran />} />
      </Routes >
    </MyProvider>

  );
}
export default App;
