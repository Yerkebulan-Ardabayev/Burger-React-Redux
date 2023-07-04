import "./App.css";
import { Header } from "./componets/Header/Header";
import { Navigation } from "./componets/Navigation/Navigation";
import { Catalog } from "./componets/Catalog/Catalog";
import { Provider } from "react-redux";
import { store } from "./store";
import { ModalDelivery } from "./componets/ModalDelivery/ModalDelivery";

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
      <ModalDelivery/>
    </Provider>
  );
};
