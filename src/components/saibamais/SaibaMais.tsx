import { Link } from "react-router-dom"
import ComoFunciona from "../saibamais/comofunciona/ComoFunciona" // ✅ caminho corrigido
import GaleriaFotos from "./galeriafotos/GaleriaFotos"

function OQueEAlimentacaoNatural() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-green-800">
        O que é alimentação natural?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        A alimentação natural para pets é baseada em alimentos frescos,
        preparados de forma balanceada para atender todas as necessidades
        nutricionais de cães e gatos. Diferente das rações industrializadas,
        ela utiliza ingredientes reais como carnes, legumes, verduras e grãos.
      </p>

      <p className="text-gray-700 leading-relaxed mb-10">
        Esse tipo de alimentação pode proporcionar mais energia, melhor
        digestão, pelagem mais bonita e fortalecimento do sistema imunológico.
      </p>

      {/*  Como Funciona no final do conteúdo */}
      <ComoFunciona />

      <GaleriaFotos />

      {/* Botão após o Como Funciona */}
      <div className="mt-12 text-center">
        <Link
          to="/depoimentos"
          className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
        >
          Conheça nossos clientes mais importantes 🐾
        </Link>
      </div>

    </section>
  )
}

export default OQueEAlimentacaoNatural

