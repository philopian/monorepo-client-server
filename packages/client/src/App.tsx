import './App.css'
import config from './confg'
import useFetch from './hooks/use-fetch'
import logo from './logo.svg'

function App() {
  const { url } = config
  const { data, isFetching } = useFetch({ url })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {!isFetching && <p>{JSON.stringify(data)}</p>}
      </header>
    </div>
  )
}

export default App
