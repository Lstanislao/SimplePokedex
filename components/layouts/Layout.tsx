import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";
import { useRouter } from "next/router";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  console.log();
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Luis Stanislao" />
        <meta name="description" content={`Info sobre pokemon ${title}`} />
        <meta name="keywords" content={`pokemon, pokedex, ${title}`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
