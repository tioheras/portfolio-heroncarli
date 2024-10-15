/* eslint-disable no-unused-vars */
// src/components/Contatos.jsx

import React from 'react';

const Contatos = () => {
  return (
    <section className="p-6 bg-white my-4 flex justify-center">
      <div className="max-w-xl text-center">
        <h2 className="text-3xl font-semibold mb-4">contatos</h2>
        <ul className="list-none">
          <li>
            <a href="mailto:dev.heroncarli@gmail.com" className="text-blue-500 hover:underline text-2xl">
              dev.heroncarli@gmail.com
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/heron-augusto-de-carli-630693181/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline text-2xl"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/tioheras" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline text-2xl"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contatos;
