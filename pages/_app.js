import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/lib/apolloClient'

// import Head from 'next/head';
// import { ConfigProvider } from 'antd';
// import ruRU from 'antd/es/locale/ru_RU';

//* Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';
import '@/styles/base.scss';


const NewsApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      {/* <ConfigProvider locale={ruRU}> */}
      {/* <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
    </Head> */}
      <Component {...pageProps} />
      {/* </ConfigProvider> */}
    </ApolloProvider>
  )
}

export default NewsApp