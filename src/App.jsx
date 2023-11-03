import { Provider } from "react-redux";
import Container from "./components/Container";
import configure from "./store/store";

function App() {
  const store = configure();
  console.log(store.getState())
  return (
    <>
      <Provider store={store}>
        <Container />
      </Provider>
    </>
  );
}

export default App;
