import '../css/index.css';
import Head from 'next/head';
import Layout from '@components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Tokenizer Banking on Blockchain</title>
        <meta
          name="Description"
          content="Tokenizer | Self Tokenization platform."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
