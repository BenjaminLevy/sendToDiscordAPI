import fetch from "node-fetch";
const AWS_SECRETS_EXTENTION_HTTP_PORT = 2773;
const AWS_SECRETS_EXTENTION_SERVER_ENDPOINT = `http://localhost:${AWS_SECRETS_EXTENTION_HTTP_PORT}/secretsmanager/get?secretId=`;

const getSecret = async (secretName: string) => {
  const url = `${AWS_SECRETS_EXTENTION_SERVER_ENDPOINT}${secretName}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Aws-Parameters-Secrets-Token": process.env.AWS_SESSION_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Error occured while requesting secret ${secretName}. Responses status was ${response.status}`
    );
  }

  const secretContent = (await response.json()) as { SecretString: string };
  return parseDiscordTokenFromSecretsObject(secretContent.SecretString)
};

const parseDiscordTokenFromSecretsObject = (SecretsString:string) => {
  const secretsObject = JSON.parse(SecretsString)
  const discordToken = secretsObject.discordToken
  return `Bot ${discordToken}`
}
export default getSecret
