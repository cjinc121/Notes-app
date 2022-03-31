import "./HomePage.css"
import { LeftSidebar } from "../component/left-sidebar/leftSidebar"
import { MainBody } from "../component/main-body/mainBody"

const HomePage=()=>{
return <div className="main-content">
<LeftSidebar/>
<MainBody/>
</div>
}
export {HomePage}