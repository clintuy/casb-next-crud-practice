import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout';
import '../css/style.css';
// import App from 'next/app'

function MyApp({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>
}
export default MyApp