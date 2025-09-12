import Navbar from "../navbar/page";
import SelfDiscoveryPage from "../self-discovery/page";
import WhyTakeQuizzes from "../why/page";
import Guide from "../guide";
import Footer from "../footer/page";

export default function QuizPage (){
    return(
        <div>
            <Navbar />
            <SelfDiscoveryPage />
            <WhyTakeQuizzes />
            <Guide  />
            <Footer />
        </div>
    )
}