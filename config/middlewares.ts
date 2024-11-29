export default [
  'strapi::logger',
  'strapi::errors',
   {
    name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
              'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
              upgradeInsecureRequests: null,
            },
          },
        },
   },
  {
    name: 'strapi::cors',
    config: {
      enabled: false,
      origin: ['http://localhost:3000'], // Allow your frontend URL
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
      credentials: true, // Allow cookies and authorization headers
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
