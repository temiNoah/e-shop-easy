import logo from './logo.svg';
import './App.css';
import Routers from "./router/Router";
import { BrowserRouter as Router } from "react-router-dom";
import { APIProvider } from "./context/APIContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Provider } from 'react-redux';
import SuccessMessage from './components/modal/successMessage'
import ErrorMessage from './components/modal/errorMessage'
import InfoMessage from './components/modal/infoMessage'
import store from './redux/store';
import { AuthUserProvider } from "./context/AuthUserContext";

function App() {
  return (
    <AuthUserProvider>
    <Provider store={store}>
          <SuccessMessage />
          <ErrorMessage />
          <InfoMessage />
          <APIProvider>
            <ShoppingCartProvider>
                  <Router>
                    <Routers />
                  </Router>
          </ShoppingCartProvider>
        </APIProvider>
     </Provider>
    </AuthUserProvider> 
  );
}

export default App;
