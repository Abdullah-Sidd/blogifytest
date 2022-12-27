import BottomBar from '../components/BottomBar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return   <>
     
        <main className='flex'>
        <aside class="max-h-screen sticky top-0 ">
          <Sidebar />
        </aside>
          <Component {...pageProps} />
          {/* <Footer />   Will work in Future */}              
        </main>

        <BottomBar/>
  </>
}

export default MyApp
