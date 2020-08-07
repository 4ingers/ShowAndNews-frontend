import withApollo from 'next-with-apollo';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost';
// import { ConfigProvider } from 'antd';
// import ruRU from 'antd/es/locale/ru_RU';

//* Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';
import '@/styles/base.scss';


const NewsApp = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    {/* <ConfigProvider locale={ruRU}> */}
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
    </Head>
    <Component {...pageProps} />
    {/* </ConfigProvider> */}
  </ApolloProvider>
)

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache().restore(initialState || {})
  });
})(NewsApp);