import { AppContextProvider } from "@/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router/router";
import { Auth0ProviderWithNavigate } from "./components/particle/auth0-provider/auth0-provider-with-navigate";

const queryClient = new QueryClient();

function App() {
  return (
    <AppContextProvider>
      <Auth0ProviderWithNavigate>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Auth0ProviderWithNavigate>
    </AppContextProvider>
  );
}

export default App;
