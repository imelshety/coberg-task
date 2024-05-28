import "./App.css";
import Blog from "./components/Blog/Blog";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
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
        <Categories.Card />
        <Categories.Caption />
      </Categories>
      <Blog>
        <Blog.Title />
        <Blog.Slider />
        <Blog.Action />
      </Blog>
      <Footer>
        <Footer.Info />
        <Footer.Category/>
        <Footer.Contact/>
        <Footer.Phone/>
      </Footer>
    </main>
  );
}

export default App;
