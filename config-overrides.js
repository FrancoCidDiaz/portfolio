import ImageminPngquant from 'imagemin-pngquant'
import rewireImagemin from 'react-app-rewire-imagemin'

module.exports = function override(config, env) {
  config = rewireImagemin(config, env, {
    plugins: [
      ImageminPngquant({
        speed: 1,
        quality: [0.95, 1],
      }),
    ],
  });
  return config;
};