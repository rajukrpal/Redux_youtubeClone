import BodyContent from "./components/bodyContent/BodyContent"
import FeedButton from "./components/feedbutton/FeedButton"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"


const App =()=> {

  return (
    <>
    <div>
      <Navbar />
      <div className="flex">
      <Sidebar />
      <div className="pl-5">
        <div>
          <FeedButton />
        </div>
        <div className="pt-2">
          <BodyContent />
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
