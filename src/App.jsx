
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { Shop } from './pages/Shop/shop';
import { Contact } from './pages/Contact/contact';
import { Header } from './layouts/header';
import { FooterSection } from './layouts/footer';
function App() {
  return (
    <MyProvider>
      <Header/>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes >
      <FooterSection />
    </MyProvider>

  );
}
export default App;
