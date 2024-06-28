import React from 'react';
import { useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import nossaCasa from 'assets/nossa_casa.png';
import styles from './Inicio.module.scss';
import StylesTema from 'styles/Tema.module.scss';
import { Prato } from 'types/Prato';

export default function Inicio() {
  const navigate = useNavigate();

  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }

  return (
    <section>
      <h3 className={StylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => {
          return (
            <div className={styles.recomendado} key={item.id}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button
                onClick={() => redirecionarParaDetalhes(item)}
                className={styles.recomendado__botao}
              >
                Ver mais
              </button>
            </div>
          );
        })}
      </div>
      <h3 className={StylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt='Casa do aluroni' />
        <div className={styles.nossaCasa__endereco}>
          Rua Vergueiro, 3185 <br />
          <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
