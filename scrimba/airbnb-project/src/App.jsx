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
      img={elem.coverImg}
      rating={elem.stats.rating}
      reviewCount={elem.stats.reviewCount}
      country={elem.location}
      title={elem.title}
      price={elem.price}
      openSpots={elem.openSpots}
      location={elem.location}
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
