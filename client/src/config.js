import config from "./config.json";

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
