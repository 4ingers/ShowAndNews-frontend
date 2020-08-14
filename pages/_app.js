// import Head from 'next/head';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';
import '@/styles/base.scss';


const NewsApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Head> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" /> */}
      {/* </Head> */}
      <Component {...pageProps} />
    </>
  )
}

export default NewsApp