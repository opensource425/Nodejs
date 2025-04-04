const config = {
    API_PORT: process.env.API_PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI,
    SECRET_KEY: process.env.SECRET_KEY,
    SEC_KEY: process.env.SEC_KEY,
    PASSWORD: process.env.PASSWORD,
    AZURE_CONTAINER: process.env.AZURE_CONTAINER,
    VISION_KEY: process.env.VISION_KEY,
    VISION_ENDPOINT: process.env.VISION_ENDPOINT,
    AZURE_OPEN_AI_GPT_ENDPOINT: process.env.AZURE_OPEN_AI_GPT_ENDPOINT,
    AZURE_OPEN_AI_GPT_API_KEY: process.env.AZURE_OPEN_AI_GPT_API_KEY,
    AZURE_OPEN_AI_GPT_VERSION: process.env.AZURE_OPEN_AI_GPT_VERSION,
    AZURE_OPEN_AI_GPT_DEPLOYMENT: process.env.AZURE_OPEN_AI_GPT_DEPLOYMENT,
    VIDEO_AI_ACCOUNT_ID: process.env.VIDEO_AI_ACCOUNT_ID,
    VIDEO_AI_SUBSCRIPTION_KEY: process.env.VIDEO_AI_SUBSCRIPTION_KEY,
    RESET_PASSWORD_LINK: process.env.RESET_PASSWORD_LINK,
    LOGIN_LINK: process.env.LOGIN_LINK,
    ADMIN_LOGIN_LINK: process.env.ADMIN_LOGIN_LINK,
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    FRONT_END_BASE_URL: process.env.FRONT_END_BASE_URL,
    ADMIN_RESET_PASSWORD_LINK: process.env.ADMIN_RESET_PASSWORD_LINK,
    ENCRYPTION_SECRET_KEY: process.env.ENCRYPTION_SECRET_KEY,
    ASSET_CONTAINER: process.env.ASSET_CONTAINER,
    BASE_URI: process.env.BASE_URI,
    AZURE_OPENAI_ENDPOINT: process.env.AZURE_OPENAI_ENDPOINT,
    AZURE_OPENAI_API_KEY: process.env.AZURE_OPENAI_API_KEY,
    AZURE_OPEN_AI_API_VERSION: process.env.AZURE_OPEN_AI_API_VERSION,
    AZURE_OPEN_AI_DEPLOYMENT: process.env.AZURE_OPEN_AI_DEPLOYMENT,
    STRING_FORMAT: process.env.STRING_FORMAT,
    LOCAL_URL: process.env.LOCAL_URL
}

module.exports = Object.freeze(config);