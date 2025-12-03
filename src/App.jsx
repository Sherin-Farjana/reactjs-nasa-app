import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [data, setData] = useState(null)         // Stores NASA API data
  const [showModal, setShowModal] = useState(false)  // Sidebar visibility

  // Toggle sidebar modal
  function handleToggleModal() {
    setShowModal(!showModal)
  }

  // Fetch NASA APOD data on component mount
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`

      // Check cache first
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }

      localStorage.clear()

      // Fetch from API
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }    

    fetchAPIData()
  }, [])

  return (
    <>
      {data ? (<Main data={data} />) : (  // Display image or loader
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (  // Render sidebar if toggled
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && (  // Render footer once data is available
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  )
}

export default App
