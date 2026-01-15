import { FaGithub } from "react-icons/fa";

export default function SobreInovaHer() {
    return (
        <section className="w-full bg-emerald-100 py-16">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-10">

                    {/* Logo à esquerda */}
                    <div className="shrink-0">
                        <img
                            src="https://ik.imagekit.io/wvjuanedn/InovaHer%20-%20%C3%8Dcones/iconeredondo-removebg-preview.png"
                            alt="Logo InovaHer"
                            className="w-52 h-52 object-contain rounded-2xl bg-white shadow-lg "
                        />
                    </div>

                    {/* Conteúdo à direita */}
                    <div className="flex flex-col gap-6 text-center md:text-left">

                        <p className="text-lg leading-relaxed max-w-3xl text-emerald-800 font-semibold">
                            A InovaHer é uma empresa fictícia criada como parte do
                            Projeto Integrador do Bootcamp da Generation Brasil.
                            Formada por um grupo de mulheres desenvolvedoras, nasceu com o propósito
                            de unir tecnologia, inovação e empoderamento feminino, desenvolvendo
                            soluções criativas e relevantes para o mercado.
                        </p>

                        {/* CTA GitHub */}
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="font-semibold text-lg text-emerald-800">
                                Acesse nosso GitHub e conheça todos os nossos projetos
                            </span>

                            <a
                                href="https://github.com/InovaHer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-800 hover:text-emerald-500 transition-colors"
                                aria-label="GitHub InovaHer"
                            >
                                <FaGithub size={28} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}
