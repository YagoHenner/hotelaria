import "./App.css";
import Router from "./globals/routes/router.routes";
import ContextoState from "./api/context/contexto";
import Provider from "./api/provider/provider";
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
