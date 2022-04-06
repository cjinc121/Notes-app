import "./mainBody.css"

import { NoteCard } from "../note-card/noteCard";
import {  NoteDisplayCard } from "../note-display/noteDisplayCard";
const MainBody=()=>{
return <div className="main-body">
<NoteCard/>
<NoteDisplayCard/>
</div>
}
export {MainBody}