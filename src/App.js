import logo from './logo.svg';
import './App.css';

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// </header>
function App() {
  return (
    <div className="App">
      <div className="headspace"></div>
        <div className="columns is-mobile is-centered">
          <div className="column is-four-fifths">
          <h1 className="title">Matthew Talty Colvard</h1>
          <h2 className="subtitle-mod">Full Stack Web Development, Data Visualisation & Mapmaking</h2>
        </div>
      </div>
      <div><hr/></div>
      <div className="columns is-mobile is-centered">
        <div className="column is-four-fifths">
          <h2 className="subtitle-mod">Foxymaps</h2>
          <a href="foxymaps.co.uk" className="subtitle-mod">foxymaps.co.uk</a>
          <div className="breakspace"></div>
          <h3 className="paragraph-mod">Inspired by the idea of urban wildlife corridors, Foxymaps is a web mapping service with a twist. It calculates walking directions to any destination in London, optimized to spend as much of the journey as possible passing through green/openspace.</h3>
          <div className="breakspace"></div>
          <h3 className="paragraph-mod"> It was built in React with a PostgreSQL/ PostGIS database running in a Python/ Django framework. Routes are calculated using GeoDjango queries in a modified Dijkstra algorithm. The database was populated in part using the BeautifulSoup web scraper as well as data from the Ordnance Survey. It utilizes React MapboxGL and communicates with the Mapbox Studio, GeoCoder, and Directions APIs.</h3>
        </div>
      </div>
      <div><hr/></div>
      <div className="columns is-mobile is-centered">
        <div className="column is-four-fifths">
          <h2 className="subtitle-mod">Fifty Shades of Purple: Election Map</h2>
          <a href="foxymaps.co.uk" className="subtitle-mod">purplemap.info</a>
          <div className="breakspace"></div>
          <h3 className="paragraph-mod">Purplemap.info demonstrates the way American presidential election data ought to be presented in the media. </h3>
          <div className="breakspace"></div>
          <h3 className="paragraph-mod"> Using Mapbox expressions to generate a linear gradient from primary blue to primary red, the Democrat/Republican vote ratio determines where each state lies on the colour spectrum from blue to red. Presented in this manner, the vast majority of American states appear not as “blue states” or “red states” but more accurately as shades of purple. Purplemap.info helps the user visualize geographic and demographic trends over the past nine elections, aided by contextual statistics on voter turnout and third-party vote, granular data on individual states, and information about which was the most Republican, the most Democratic, and the most centrist state in each election. It was built in React Hooks with MapboxGL Javascript and utilises WebGL, Canvas, d3, and QGIS.</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
