import "./App.css";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Interiors from "./components/Interiors/Interiors";

function App() {
  return (
    <main className="w-full h-screen bg-white relative ">
      <Header>
        <div className="w-full flex justify-between items-center lg:py-8">
          <Header.Logo />
          <Header.Title />
        </div>
        <Header.Nav />
      </Header>
      <Hero>
        <Hero.Img />
        <Hero.Caption />
      </Hero>
      <Interiors>
        <Interiors.Title />
        <Interiors.Icons />
      </Interiors>
      <Categories>
        <Categories.Title />
        <Categories.Card/>
        <Categories.Caption/>
      </Categories>
    </main>
  );
}

export default App;
