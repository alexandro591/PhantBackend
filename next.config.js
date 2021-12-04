module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.handlebars\.?.*$/,
      loader: 'handlebars-loader',
    });
    return config;
  },
};
