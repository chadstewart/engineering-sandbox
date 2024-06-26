import { AppContextProvider } from "@/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import router from "./router/router";
import { Auth0ProviderWithNavigate } from "./components/particle/auth0-provider/auth0-provider-with-navigate";
import { useAuth } from "./lib/auth/hooks/use-auth";

const queryClient = new QueryClient();

const RouterWrapper = () => {
  const { isAuthenticated } = useAuth();

  return (
    <RouterProvider
      router={router}
      context={{
        isAuthenticated
      }}
    />
  );
};

function App() {
  return (
    <AppContextProvider>
      <Auth0ProviderWithNavigate>
        <QueryClientProvider client={queryClient}>
          <RouterWrapper />
        </QueryClientProvider>
      </Auth0ProviderWithNavigate>
    </AppContextProvider>
  );
}

export default App;
