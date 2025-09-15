
import SelfDiscoveryPage from "../self-discovery/page";
import WhyTakeQuizzes from "../why/page";
import Guide from "../guide";


export default function QuizPage (){
    return(
        <div>
        
            <SelfDiscoveryPage />
            <WhyTakeQuizzes />
            <Guide  />
            
        </div>
    )
}