import React from 'react';
import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <section>
      <h3 className={styles.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => {
          return (
            <div className={styles.recomendado} key={item.id}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button className={styles.recomendado__botao}>
                Ver mais
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}