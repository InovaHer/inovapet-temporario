const depoimentos = [
  {
    nome: "Thor",
    raca: "Labrador",
    imagem: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
    mensagem:
      "Antes eu vivia cansado e minha pelagem era sem brilho. Depois da alimentação natural, ganhei mais energia, meu pelo ficou super macio e agora tenho disposição até para correr no parque!",
  },
  {
    nome: "Mel",
    raca: "Shih Tzu",
    imagem: "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg",
    mensagem:
      "Eu tinha muitos problemas de alergia e coceiras. Com a comida natural, minha pele melhorou muito e não passo mais o dia me coçando. Estou muito mais feliz!",
  },
  {
    nome: "Rex",
    raca: "Pastor Alemão",
    imagem: "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg",
    mensagem:
      "Minha digestão não era nada boa... mas agora está tudo em dia! Me sinto mais leve, ativo e pronto para qualquer aventura com meu humano.",
  },
]

function DepoimentosPets() {
  return (
    <section id="depoimentos" className="bg-white py-16 px-6">

      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
          🐾 Depoimentos dos nossos clientes peludos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((pet, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={pet.imagem}
                alt={pet.nome}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-green-600"
              />

              <h3 className="text-xl font-bold text-green-700">
                {pet.nome}
              </h3>

              <span className="text-sm text-gray-500 mb-4">
                {pet.raca}
              </span>

              <p className="text-gray-700 italic">
                “{pet.mensagem}”
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default DepoimentosPets
