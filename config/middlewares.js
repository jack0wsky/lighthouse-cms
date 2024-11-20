module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:", "https:", "*"],
          "img-src": ["'self'", "data:", "blob:", "*", "cdn.jsdelivr.net", "strapi.io", `${env('DO_SPACE_BUCKET')}.${env('DO_SPACE_REGION')}.digitaloceanspaces.com`],
          "media-src": ["'self'", "data:", "blob:", "*"],
          "script-src": ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
