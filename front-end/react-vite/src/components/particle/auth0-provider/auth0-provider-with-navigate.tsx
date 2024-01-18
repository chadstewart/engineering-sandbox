import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "@tanstack/react-router";

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

export const Auth0ProviderWithNavigate = ({ children }: Auth0ProviderWithNavigateProps) => {
  const navigate = useNavigate();

  const domain = process.env.VITE_AUTH0_URL;
  const clientId = process.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = process.env.VITE_AUTH0_CALLBACK_URL;

  const onRedirectCallback = () => {
    navigate({ to: "/" });
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
