import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { defaultOptions } from "./config/reactQueryConfigs";
import Layout from "./layouts/Layout";

function App() {
  const queryClient = new QueryClient(defaultOptions);
  return (
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
