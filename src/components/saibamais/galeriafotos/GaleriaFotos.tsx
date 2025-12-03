function GaleriaFotos() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-green-800 text-center">
        Exemplos de refeições naturais 🍗🥕
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <img
          src="https://ik.imagekit.io/seuusuario/refeicao1.jpg"
          alt="Refeição natural para pet"
          className="rounded-xl shadow-md object-cover w-full h-60"
        />

        <img
          src="https://ik.imagekit.io/seuusuario/refeicao2.jpg"
          alt="Refeição natural para pet"
          className="rounded-xl shadow-md object-cover w-full h-60"
        />

        <img
          src="https://ik.imagekit.io/seuusuario/refeicao3.jpg"
          alt="Refeição natural para pet"
          className="rounded-xl shadow-md object-cover w-full h-60"
        />

      </div>
    </section>
  )
}

export default GaleriaFotos
