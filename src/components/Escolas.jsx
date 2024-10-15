/* eslint-disable no-unused-vars */
// src/components/Escolas.jsx

import React from 'react';

const Escolas = () => {
  return (
    <section className="p-6 bg-white my-4 flex justify-center">
      <div className="max-w-6xl text-center">
        <h2 className="text-3xl font-semibold mb-4">Formação</h2>
        <ul className="list-disc pl-5 text-2xl justify-center">
          <li className="mb-2 text-justify">Graduação em Análise e Desenvolvimento de Sistemas / Unicesumar Cursando – Término em 2025.</li>
          <li className="mb-2 text-justify">Curso de Desenvolvimento de Carreira Fullstack Developer – Digital Innovation One – DIO – Cursando.</li>
          <li className="mb-2 text-justify">Curso de Gestão de Projetos PMBoK – Plataforma Veduca – 12/2023.</li>
          <li className="text-justify">Graduação em Engenharia Ambiental – Universidade do Estado de Santa Catarina - UDESC - 12/2017.</li>
        </ul>
      </div>
    </section>
  );
};

export default Escolas;
