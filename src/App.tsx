import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StGlobalStyles from "./styles/StGlobalStyles";
import Router from "./shared/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StGlobalStyles />
        <Router />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
