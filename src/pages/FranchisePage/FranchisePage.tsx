import './FranchisePage.css'
import FormFranchise from "../../components/FormFranchise/FormFranchise.tsx";
import IntroduceFranchise from "../../components/IntroduceFranchise/IntroduceFranchise.tsx";

function FranchisePage() {
    return (
        <div id="FranchisePage">
            <IntroduceFranchise/>
            <FormFranchise/>
        </div>
    );
}

export default FranchisePage;