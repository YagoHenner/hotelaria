import "./App.css";
import Router from "./routes/router.routes.js";
import ContextoState from "./context/contexto";
import Provider from "./provider/provider";

function App() {
  return (
    <Provider>
      <div className='App'>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
