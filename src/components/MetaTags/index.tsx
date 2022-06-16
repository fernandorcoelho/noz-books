import Head from 'next/head';

import Logo from '/public/images/favicon.png';

function MetaTags({ title, description, keywords, image, url }) {
  return (
    <Head>
      <title>{title || ''}</title>
      <meta name="description" content={description || ''} />
      <meta name="keywords" content={keywords || ''} />
      <meta name="name" content={title || ''} />
      <meta name="description" content={description || ''} />
      <meta name="image" content={image || Logo} />

      <meta property="og:title" content={title || ''} />
      <meta
        property="og:url"
        content={url || 'https://portasabertas.org.br/'}
      />
      <meta property="og:image" content={image || Logo} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:site_name" content="Portas Abertas" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
    </Head>
  );
}

export default MetaTags;
