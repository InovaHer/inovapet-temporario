import CarrosselDepoimentos from "../../components/carroseldepoimentos/CarroselDepoimentos"
import Hero from "../../components/hero/Hero"



function Home() {
  return (
     <main className="pt-16">

      <div className="mb-8 md:mb-16">
        <CarrosselDepoimentos />
      </div>

    </main>
  )
}

export default Home