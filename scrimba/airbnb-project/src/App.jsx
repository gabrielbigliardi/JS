// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'

function App() {

  const dataMap = data.map(elem => {
    return <Card
      key={elem.id}
      // elem={elem}
      {...elem}
    />;
  })

  // <Hero />
  return (
    <div className="App">
      <Navbar />
      <section className='cards--list'>
        {dataMap}
      </section>
    </div>
  );
}

// - img ("katie-zaferes.png")
// - rating ("5.0")
// - reviewCount (6)
// - country (Whatever you want)
// - title ("Life Lessons with Katie Zaferes")
// - price (136)

export default App;
