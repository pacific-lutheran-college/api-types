import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";

const credential = new DefaultAzureCredential();
const url = "https://pacluth-keys.vault.azure.net/";
const client = new SecretClient(url, credential);

async function getGraphToken(clientId?: string, clientSecret?: string) {
  if (!clientId || !clientSecret) {
    const token = await credential.getToken(
      "https://graph.microsoft.com/.default",
    );
    return token.token;
  } else {
    const data = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }).toString();

    const request = await fetch(
      "https://login.microsoftonline.com/91993175-5eb2-4687-8999-fb91b57583b1/oauth2/v2.0/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": `${data.length}`,
        },
        body: data,
      },
    );

    const response = await request.json();
    if (request.status != 200) {
      console.log(response);
      throw new Error("Unable to get Graph Token");
    } else {
      return response.access_token;
    }
  }
}

async function getSecret(secretName: SecretList) {
  try {
    const secretDetails = await client.getSecret(secretName);
    if (secretDetails.value) {
      return secretDetails.value;
    } else {
      throw new Error(`Secret named ${secretName} could not be found`);
    }
  } catch (error: any) {
    console.log(error);
    console.error(error.details.error.message);
    process.exit();
  }
}

async function getSecrets(secretName: SecretList[]): Promise<string[]> {
  return await Promise.all(
    secretName.map(async (secret) => {
      const secretDetails = await client.getSecret(secret);
      return secretDetails.value!;
    }),
  ).catch((error) => {
    throw new Error(error);
  });
}
export { getGraphToken, getSecret, getSecrets };

export type SecretList =
  | "TASS-ASS-TOKEN"
  | "TASS-EHR-TOKEN"
  | "TASS-ENROL-TOKEN"
  | "TASS-IDM-TOKEN"
  | "TASS-LMS-TOKEN"
  | "TASS-NEWEMP-TOKEN"
  | "TASS-SAA-TOKEN"
  | "TASS-STU-TOKEN"
  | "VISION6-TOKEN"
  | "NAV-JWT"
  | "NAV-DEV-JWT"
  | "INTUNE-GRAPH-CLIENT-SECRET"
  | "CLIPBOARD-JWT"
  | "AZ-DOC-INTEL-KEY"
  | "TASS-SQL-DB-READONLY"
  | "OLIVER-SQL-DB-READONLY"
  | "WEBHELPDESK-API-TOKEN"
  | "PACLUTH-FA-CLIENT-SECRET"
  | "SALTO-LDAP-USER"
  | "PACLUTH-VISION-SECRET"
  | "TASS-IT-API";
