// import './App.css';
import Router from './routes/Router';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Router />
      <Layout />
      <Footer />
    </>
  );
}

export default App;
