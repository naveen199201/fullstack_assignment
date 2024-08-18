import './App.css';
import Header from './Header';
import SearchComponent from './SearchComponent';
import Cards from './Cards';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchComponent />
      {/* <Cards/> */}
      <Footer />
    </div>
  );
}

export default App;
