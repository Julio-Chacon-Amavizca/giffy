import './App.css'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import { Route, Link } from 'wouter'
import SearchResults from './pages/SearchResults/Index'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'

function App () {
  return (
    <StaticContext.Provider value={{
      name: 'Julio',
      suscribete: true
    }}
    >
      <div className='App'>
        <section className='App-content'>

          <Link to='/'>
            <figure className='App-logo'>
              <img alt='Giffy logo' src='/logo.png' /><br />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path='/'
            />
            <Route
              component={Detail}
              path='/gif/:id'
            />
            <Route
              component={SearchResults}
              path='/search/:keyword'
            />
            <Route
              component={() => <h1>404 ERROR</h1>}
              path='/404'
            />
          </GifsContextProvider>
          {/* <Route><ListOfGifs keyword='Toro' /></Route> */}
          {/* {
        gifs
          ? gifs.map(singleGif => <Gif key={singleGif.id} title={singleGif.title} url={singleGif.url} id={singleGif.id} />)
          : <p>Cargando...</p>

        } */}
          {/* <button onClick={() => setGifs(DIFERENT_GIFS)}>Change Gif</button> */}
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
