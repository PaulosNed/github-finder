import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/pages/About";
import Home from "./Components/pages/Home";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import NotFound from "./Components/pages/NotFound";
import Alert from "./Components/layout/Alert";
import Profile from "./Components/pages/Profile";
import { UserContextProvider } from "./Context/github/GithubUserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="flex flex-col h-screen">
          <Header size="basis-1/12"/>
          <main className="basis-9/12 container px-3 grid grid-col-1 items-center">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/user/:login" element={<Profile />}/>
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer size="basis-2/12"/>
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
