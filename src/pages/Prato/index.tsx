import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import NotFound from 'pages/NotFound';
import TagsPrato from 'components/TagsPratos';
import PaginaPadrao from 'components/PaginaPadrao';
import styles from './Prato.module.scss';

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();

  const prato = cardapio.find((item) => item.id === Number(id));

  if (!prato) {
    return <NotFound />;
  }

  return (
    <PaginaPadrao>
      <button onClick={() => navigate(-1)} className={styles.voltar}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <TagsPrato {...prato} />
      </section>
    </PaginaPadrao>
  );
}
