
import PostsTemplate from "./PostTemplate"
import SidBar from "./SideBar"
import ContainerStories from "./ContainerStorys"
export default function Container(){
  return (
  <div class="container">
          
       <div class="containerEsquerda">
       <ContainerStories/>
       <PostsTemplate/>
       </div>
     <div class="sideBar">
       <SidBar/>
     </div>
  </div>     
  )        
}
