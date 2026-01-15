import Carrossel from "../../components/carrossel/Carrossel"
import SecaoEquipe from "../../components/equipe/SecaoEquipe"
import HeroStack from "../../components/stacks/herostack/HeroStack"

function Sobre() {
    return (
        <>
            <div className="mt-6 md:mt-0">
                <Carrossel />
            </div>
            <div className="mt-6 md:mt-0">
                <HeroStack />
            </div>
            <div className="mt-6 md:mt-0">
                <SecaoEquipe />
            </div>

        </>
    )
}

export default Sobre
