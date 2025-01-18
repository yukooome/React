import './App.css';
import Produit from './data/produit.json';                      // Pour les produits
import ProduitTable from './components/ProduitTable/ProduitTable'; // Import correct de ProduitTable

function App() {
  return (
    <>
      <h2>Produits</h2>
      <ProduitTable ProduitArray={Produit} />
    </>
  );
}

export default App;
