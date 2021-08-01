module.exports = ({ env }) => ({
  defaultConnection: 'default',
  // connections: {
  //   default: {
  //     connector: 'bookshelf',
  //     settings: {
  //       client: 'sqlite',
  //       filename: env('DATABASE_FILENAME', '.tmp/data.db'),
  //     },
  //     options: {
  //       useNullAsDefault: true,
  //     },
  //   },
  // },
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'blog'),
        username: env('DATABASE_USERNAME', 'anan'),
        password: env('DATABASE_PASSWORD', 'anan147258'),
      },
      options: {},
    },
  },
});
