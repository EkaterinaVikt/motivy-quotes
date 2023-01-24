import MainPage from "./Components/MainPage";
// import MainPageUseEff from "./Components/MainPageUseEff";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";

function App(props) {
  // return <MainPage store={props.store} />;

  // не работает. Выяснить, почему и как исправить
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/main" element={<MainPage store={props.store} />} /> */}
        <Route path="/*" element={<MainPage store={props.store} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
