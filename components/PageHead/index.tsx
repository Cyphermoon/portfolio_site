import Head from "next/head";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeProvider";


interface Props {
  title: string
  description?: string
}

const PageHead = ({ title, description: _description }: Props) => {
  const seo = {
    description: _description || "This portfolio showcases a collection of my projects, demonstrating my expertise and skills as a frontend developer. Explore my work and discover innovative web solutions, stunning designs, and seamless user experiences.",
    siteUrl: "https://cyphermoon.vercel.app/",
    ogImageUrl: "/images/og-image.png",
  };

  const { description, siteUrl, ogImageUrl } = seo;

  const [themeColor, setThemeColor] = useState("#0f172a");
  const theme = useTheme();

  useEffect(() => {
    if (theme.isDark) setThemeColor("#0f172a");
    else setThemeColor("#f1f5f9");
  }, [theme.isDark]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Cypher Moon, Kelvin's portfolio, Cypher moon portfolio, Kelvin Atologun Portfolio, Kelvin Adeshola Portfolio" />
      <meta name="author" content="Kelvin Atologun, Cypher Moon" />

      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta property="twitter:url" content={siteUrl} />
      <meta name="twitter:image" content={ogImageUrl} />

      <meta name="theme-color" content={themeColor} />
      {/* Windows Phone */}
      <meta name="msapplication-navbutton-color" content={themeColor} />
      {/* iOS Safari */}
      <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} />

      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
  );
};

export default PageHead;
