// import config from "./config.json";
const config = {
    "domain": "siddhantprateek.us.auth0.com",
    "clientId": "Clvqjz4HBIm5iRSZFpRyLEzEMCF07THL",
    "audience": "https://siddhantprateek.us.auth0.com/api/v2/"
}
export const getConfig = () => {
    const audience = 
        config.audience && config.audience !== "API_IDENTIFIER- AUDIENCE"
            ? config.audience
            : null;

    return {
        domain: config.domain,
        clientId: config.clientId,
        ...( audience ? { audience }: null)
    };
}
