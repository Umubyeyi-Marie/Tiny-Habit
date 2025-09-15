
import Begin from "./begin";
import Team from "./team";

import Journey from "./journey";
// import Discover from "./discover";
import Blog from "./blog/page"
import Testimony from "./testimony";
import Ready from "./ready";
import Guide from "./guide";



export default function Home (){
  return(
    <div>
    
      < Begin />
      < Team />
     
      <Journey />
       {/* < Discover /> */}
      <Blog />
      <Testimony />
      <Ready />
      <Guide />

    </div>
  )
}