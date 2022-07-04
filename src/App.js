import "./App.css";
import Header from "./component/Header";
import Dashboard from "./component/Dashboard";
import PageContent from "./component/PageContent";
import SettingContent from "./component/SettingContent";
import KlayConutApp from "./component/klaytnSampleApp/KlayCountApp";
import NotFoundPage from "./component/NotFoundPage";

import {BrowserRouter, Route, Routes, Link} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* 메인페이지 (대시보드) */}
        <Route path="/" element={<Dashboard/>}/>
        {/* 메인페이지 (SamplePage 복사용) */}
        <Route path="/page" element={<PageContent/>}/>
        {/* 카운팅앱(Klaytn) */}
        <Route path="/klayCountApp" element={<KlayConutApp/>}/>
        {/* 설정페이지 */}
        <Route path="/setting" element={<SettingContent/>}/>
        {/* 페이지를 찾을수 없습니다. */}
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
