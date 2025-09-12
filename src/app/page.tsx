import Navbar from "./navbar/page";
import Begin from "./begin";
import Team from "./team";
import Discover from "./discover";
import Journey from "./journey";
import Testimony from "./testimony";
import Ready from "./ready";
import Guide from "./guide";
import Footer from "./footer/page";


export default function Home (){
  return(
    <div>
      < Navbar />
      < Begin />
      < Team />
      < Discover />
      <Journey />
      <Testimony />
      <Ready />
      <Guide />
      <Footer />
    </div>
  )
}