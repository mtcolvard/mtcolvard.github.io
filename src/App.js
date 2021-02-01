import logo from './logo.svg';
import purplemap from './purple_maps_full_function_screenshot.png'
import foxymap from './foxymaps_screenshot_three.png'
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
        <div className="breakspace"></div>
        <div className="breakspace"></div>

          <h2 className="subtitle-mod">Foxymaps</h2>
          <div className="half-breakspace"></div>
            <a href="https://foxymaps.co.uk" className="subtitle-mod">foxymaps.co.uk</a>
          <div>
            <a href="https://github.com/mtcolvard/foxymaps" className="paragraph-mod">github.com/mtcolvard/foxymaps</a>
          </div>
          <div className="breakspace"></div>

          <h3 className="paragraph-mod">Inspired by the idea of urban wildlife corridors, Foxymaps is a mapping service that calculates directions to any destination in London, optimising the route to spend as much of the journey as possible passing through greenspace.</h3>
        </div>
      </div>

      <div className="foxy-map-div">
      <a href="https://foxymaps.co.uk">
      <img src={foxymap} className="foxy-map"  alt="Foxymaps: Walking directions for London prioritising greenspace" />
      </a>
      </div>
      <div className="breakspace"></div>
      <div className="columns is-mobile is-centered">
        <div className="column is-four-fifths">
          <h3 className="paragraph-mod"> It is built in React with a PostgreSQL/ PostGIS database running in a Python/ Django framework. Routes are calculated using GeoDjango queries in a modified Dijkstra algorithm. The database was populated in part using the BeautifulSoup web scraper as well as data from the Ordnance Survey. It utilizes React MapboxGL and communicates with the Mapbox Studio, GeoCoder, and Directions APIs.</h3>
        </div>
      </div>
      <div><hr/></div>

      <div className="columns is-mobile is-centered">
        <div className="column is-four-fifths">
        <div className="breakspace"></div>
          <h2 className="subtitle-mod">Fifty Shades of Purple: Election Map</h2>
          <div className="half-breakspace"></div>
          <a href="https://purplemap.info" className="subtitle-mod">purplemap.info</a>
          <div>
            <a href="https://github.com/mtcolvard/shades-of-purple-election-map" className="paragraph-mod">github.com/mtcolvard/shades-of-purple-election-map</a>
          </div>
          <div className="breakspace"></div>
          <h3 className="paragraph-mod">Purplemap.info demonstrates the way American presidential election data ought to be presented in the media. Using Mapbox expressions to generate a linear gradient from primary blue to primary red, the Democrat/Republican vote ratio determines where each state lies on the colour spectrum from blue to red.</h3>
        </div>
      </div>
      <div className="purple-map-div">
      <a href="https://purplemap.info">
      <img src={purplemap} className="purple-map" alt="Map of the U.S.A. in 50 Shades of Purple" />
      </a>
      </div>
      <div className="breakspace"></div>
      <div className="columns is-mobile is-centered">
        <div className="column is-four-fifths">
          <h3 className="paragraph-mod">  Presented in this manner, the vast majority of American states appear not as “blue states” or “red states” but more accurately as shades of purple. Purplemap.info helps the user visualize geographic and demographic trends over the past nine elections, aided by contextual statistics on voter turnout and third-party vote, granular data on individual states, and information about which was the most Republican, the most Democratic, and the most centrist state in each election. It was built in React Hooks with MapboxGL Javascript and utilises WebGL, Canvas, d3, and QGIS.</h3>
          <div className="breakspace"></div>
        </div>
      </div>
    <div className="footspace"></div>

    </div>
  );
}

export default App;
