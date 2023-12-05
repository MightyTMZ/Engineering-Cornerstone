import './App.css'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <>
    <div className="container">
      <NavBar></NavBar>
      <LandingPage/>
        {/* <div className="container">
          <NavBar></NavBar>
        </div> */}
    </div>
    </>
  )
}

export default App
