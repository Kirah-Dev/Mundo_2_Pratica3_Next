import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Menu } from "../componentes/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loja Next</title> {/* Altere o título */}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {" "}
        {/* Mantenha a div inicial */}
        <Menu /> {/* Adicione o componente Menu */}
        <main className={styles.main}>
          <h1 className={styles.title}>Página Inicial</h1> {/* Título h1 */}
        </main>
      </div>
    </>
  );
}
