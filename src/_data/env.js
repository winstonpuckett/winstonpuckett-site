// This file is a comprehensive list of all environment variables required to run
// the project. The "env" data source can be used in templates, but be aware that 
// other data files might use process.env directly. For instance, devPosts.js.
module.exports = {
    // no trailing '/' please. https://yoursite.com
    // This is used for important things like robots.txt. Don't forget to include it in production.
    SITE_URL: 'https://winstonpuckett.com',

    // Your DEV API key
    DEV_API_KEY: process.env.DEV_API_KEY,

    // Analytics
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,

    // Monetization
    PAYMENT_POINTER: process.env.PAYMENT_POINTER,
};