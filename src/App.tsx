import "./App.css";
import Router from "./routes/router.routes.js";
import ContextoState from "./context/contexto";
import Provider from "./provider/provider";
// import { QueryClient, QueryClientProvider } from 'react-query';
// const queryClient = new QueryClient();

function App() {
  return (
    <Provider>
      {/* <QueryClientProvider client={queryClient}> */}
      <div className='App'>
        <Router />
      </div>
      {/* </QueryClientProvider> */}
    </Provider>
  );
}

export default App;
