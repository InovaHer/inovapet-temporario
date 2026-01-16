import React from 'react';
import CardEquipe from './CardEquipe';

const teamData = [
    {
        id: 1,
        nome: 'Jamila Cardoso',
        descricao: 'Sou Jamila, desenvolvedora Full Stack e curiosa desde sempre. Meu contato com tecnologia começou na infância, quando desmontava aparelhos para entender como funcionavam — e ali descobri meu talento para criar e solucionar problemas. Depois de anos atuando em comércio e logística, decidi migrar para a tecnologia para unir propósito, criatividade e método. Hoje, desenvolvo soluções que simplificam processos, conectam pessoas e impulsionam inovação de forma prática e transformadora.',
        imagemUrl: 'https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Imagens%20Equipe/WhatsApp%20Image%202025-12-03%20at%2010.26.55.jpeg?updatedAt=1764769865148',
        linkedinUrl: 'https://www.linkedin.com/in/jamila-m-c/',
        githubUrl: 'https://github.com/jmcardoso18',
    },
    {
        id: 2,
        nome: 'Lauren Fogaça',
        descricao: 'Graduanda em ciência da computação e concluindo um bootcamp Java Full Stack, sou uma profissional ambiciosa e que ama desafios. Tive a oportunidade de estagiar dando suporte a times multinacionais e como desenvolvedora agregando valor ao entregar um projeto a uma empresa, tive também oportunidade de atuar como professora de diferentes idades e tenho facilidade em ensinar tão quanto de aprender. O inglês avançado é um dos meus pontos fortes!',
        imagemUrl: 'https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Imagens%20Equipe/WhatsApp%20Image%202025-12-03%20at%2010.23.01.jpeg?updatedAt=1764769865186',
        linkedinUrl: 'https://www.linkedin.com/in/lauren-fogaca/',
        githubUrl: 'https://github.com/lauhgabrielle14',
    },
    {
        id: 3,
        nome: 'Marcia Condarco',
        descricao: 'Sou Marcia Gisseli, tenho 25 anos formada em segurança da informação(Fatec Americana), no momento, sendo uma profissional de tecnologia apaixonada por programação e cibersegurança, com experiência de operação de loja adquirindo habilidade de comunicação e adaptabilidade como operadora de loja realizando estoquista, desenvolvi o projeto V.E.M desenvolvido com a tecnologia python como resultado da voz sendo capitada e transcrita para texto e sendo traduzida para libras.Agora participa no bootcamp da Generation aprendendo e desenvolvendo projetos com a tecnologia Spring e Java voltada para e- commerce, com objetivo de iniciar a carreira como desenvolvedora java, convido você para acompanhar meus projetos e trajetória no mundo da tecnologia.',
        imagemUrl: 'https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Imagens%20Equipe/WhatsApp%20Image%202025-12-03%20at%2010.26.56.jpeg?updatedAt=1764769865171',
        linkedinUrl: 'https://www.linkedin.com/in/marciacondarco/',
        githubUrl: 'https://github.com/MarciaCondarco',
    },

    {
        id: 4,
        nome: 'Nayara Kiyota',
        descricao: 'Profissional formada em Análise e Desenvolvimento de Sistemas e desenvolvedora Full Stack em início de carreira, com foco em Java, Spring Boot e React. Concluí recentemente um bootcamp intensivo, onde atuei no desenvolvimento de aplicações completas, utilizando boas práticas, versionamento com Git e integração entre front-end e back-end. Trago uma bagagem profissional anterior em vendas e recursos humanos, que fortaleceu minhas habilidades de comunicação, colaboração e entendimento das necessidades do usuário. Busco oportunidades como desenvolvedora Full Stack para contribuir com soluções bem estruturadas, código limpo e tecnologia que gere impacto real.',
        imagemUrl: 'https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Imagens%20Equipe/WhatsApp%20Image%202025-12-03%20at%2010.26.55%20(2).jpeg?updatedAt=1764769865229',
        linkedinUrl: 'https://www.linkedin.com/in/nayara-kiyota/',
        githubUrl: 'https://github.com/nayarakiyota',
    },

    {
        id: 5,
        nome: 'Patricia Eliseu',
        descricao: 'Profissional com ampla experiência em gestão de projetos de pesquisa, formada em Administração de Sistemas de Informação com ênfase em Análise de Sistemas. Atuei por 22 anos na FIOCRUZ, sendo 10 como Gestora de Projetos, com domínio das práticas do Guia PMBOK. Desenvolvi uma ferramenta de controle orçamentário que gerou economia de 60% no primeiro ano e aumentou a autonomia dos laboratórios. Formada como Desenvolvedora Full Stack pela Trybe e atualmente cursando o Bootcamp da Generation Brasil (Java e React). Possuo perfil resiliente, criativo e colaborativo, com domínio de tecnologias como JavaScript, Node.js, SQL e React. Busco uma oportunidade como Desenvolvedora Full Stack para aplicar minha experiência em gestão e desenvolvimento na criação de soluções digitais com propósito e impacto social.',
        imagemUrl: 'https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Imagens%20Equipe/WhatsApp%20Image%202025-12-03%20at%2010.26.55%20(1).jpeg?updatedAt=1764769865143',
        linkedinUrl: 'https://www.linkedin.com/in/patriciaeliseupge/',
        githubUrl: 'https://github.com/patriciaEliseu',
    },

    {
        id: 6,
        nome: 'Stella Brumatti de Oliveira',
        descricao: 'Profissional formada em Administração (ESPM), com pós-graduação em Gestão Estratégica de Negócios (PUCRS) e atualmente cursando Sistemas para Internet (Anhembi Morumbi). Experiência nas áreas de marketing, análise de dados e atendimento ao cliente. Possuo perfil analítico, foco em melhoria contínua e facilidade para trabalhar em equipe.Em transição de carreira para a área de tecnologia, com interesse em desenvolvimento e administração Salesforce.',
        imagemUrl: 'https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Imagens%20Equipe/WhatsApp%20Image%202025-12-03%20at%2010.26.56%20(1).jpeg?updatedAt=1764769865130',
        linkedinUrl: 'https://www.linkedin.com/in/stellabrumattideoliveira/',
        githubUrl: 'https://github.com/stellabrumatti',
    },

];

const SecaoEquipe = () => {
    return (
        <section className="py-12 px-4 bg-emerald-50">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">
                    Nossa Equipe
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {teamData.map((membro) => (
                        <CardEquipe key={membro.id} membro={membro} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecaoEquipe;
