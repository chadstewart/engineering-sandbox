import { GetSecretValueCommand, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";

export const secretsServicesUrl = async () => {
  const isProduction = process.env.NODE_ENV;

  if (isProduction)
    try {
      const secretsManager = new SecretsManagerClient({ region: "us-east-2" });
      const secretsResponse = await secretsManager.send(
        new GetSecretValueCommand({
          SecretId: "prod/lambda/api-gateway"
        })
      );

      const secrets = secretsResponse.SecretString ? JSON.parse(secretsResponse.SecretString) : null;

      return secrets.SERVICES_URL;
    } catch {
      console.log("Well that's not good...");
    }

  return process.env.REST_API_URL;
};
