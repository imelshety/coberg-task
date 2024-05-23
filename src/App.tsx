
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {


  return (
    <main className='w-full h-screen bg-white relative '>
    <Header>
      <div className='w-full flex justify-between items-center lg:py-8'>
      <Header.Logo />
      <Header.Title/>
      </div>
      <Header.Nav/>
    </Header>
    <Hero>
      <Hero.Img/>
      <Hero.Caption/>
    </Hero>
    </main>
  )
}

export default App
