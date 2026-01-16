// src/components/CardEquipe.js

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const CardEquipe = ({ membro }) => {
    return (

        <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 ease-in-out">

            <div className="max-h-80 group-hover:max-h-375 overflow-hidden transition-all duration-500 ease-in-out p-6 flex flex-col">

                <img
                    src={membro.imagemUrl}
                    alt={`Foto de ${membro.nome}`}
                    className="mx-auto w-40 md:w-44 aspect-square object-cover rounded-2xl border border-emerald-300"
                />
                <h3 className="text-xl font-bold text-emerald-800 mb-1 mt-4 text-center">{membro.nome}</h3>

                <p className="text-emerald-800 text-sm leading-relaxed text-center opacity-0 max-h-0 overflow-hidden
                                transition-all duration-500 delay-100
                                group-hover:opacity-100 group-hover:max-h-250 group-hover:my-4">
                    {membro.descricao}
                </p>

                <div className="flex justify-center space-x-4 mt-auto pt-4">
                    <a
                        href={membro.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        aria-label={`Perfil no LinkedIn de ${membro.nome}`}
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href={membro.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-black transition-colors duration-300"
                        aria-label={`Perfil no GitHub de ${membro.nome}`}
                    >
                        <FaGithub size={28} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardEquipe;