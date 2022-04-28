// JavaScripts file import
import Header from "./Assets/Components/Header/Header";
import Hero from "./Assets/Components/Hero/Hero";
import Main from "./Assets/Components/Main/Main";
import Footer from "./Assets/Components/Footer/Footer";
// main.scss import
import "./Assets/main.scss";
import Sidebar from "./Assets/Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="wrapper">
      <div className="left">
        <Sidebar/>
      </div>

      <div className="right">
      <Header/>
        <main>
          <div className="container">

            <div className="hero">
              <Hero text="Unresolved" numbers={60}/>
              <Hero text="Overdue" numbers={16}/>
              <Hero text="Open" numbers={43}/>
              <Hero text="On hold" numbers={64}/>
            </div>

            <Main/>
          </div>
        </main>

        <footer>
          <div className="container">
            <Footer/>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
