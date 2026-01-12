import { GithubLogoIcon } from '@phosphor-icons/react'


function Footer() {

    let data = new Date().getFullYear()

    return (

        <div className="flex justify-center w-full px-2 text-emerald-800 bg-emerald-300 py-4 mt-auto">
            <div className="container flex flex-col items-center gap-2">
                <p className='text-base font-bold text-center md:text-xl'>InovaPet - Comidinha Boa | Copyright - Todos os direitos reservados {data}</p>
                <p className='text-sm text-center md:text-lg'>Está é uma página destinada para fins educacionais.</p>
                <div>
                    <a href="https://github.com/InovaHer" target="_blank" className="flex items-center gap-2 hover:text-emerald-900 transition-colors" rel="noopener noreferrer">

                        Acesse nosso portfólio no GitHub  <GithubLogoIcon size={28} weight='bold' />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer