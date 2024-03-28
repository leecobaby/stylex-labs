//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { withStyleX } = require('stylex-webpack/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withStyleX({
    stylexOption: {
      dev: process.env.NODE_ENV === 'development',
      runtimeInjection: false,
      genConditionalClasses: true,
      treeshakeCompensation: true,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: __dirname,
      },
    },
  }),
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
