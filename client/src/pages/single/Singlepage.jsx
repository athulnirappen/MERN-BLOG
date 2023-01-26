
import Sidebar from "../../components/sidebar/Sidebar"
import Singlepost from "../../components/singlepost/Singlepost"
import "./singlepage.css"

const Singlepage = () => {
  return (
    <div className='singlepage'>
          <Singlepost/>
          <Sidebar/>
    </div>
  )
}

export default Singlepage
