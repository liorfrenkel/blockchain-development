import facepaint from 'facepaint';

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
const mediaQueries = Object.values(breakpoints).map(bp => `@media (min-width: ${bp}px)`);
const spacer = 35;

export default {
  breakpoints,
  mq: facepaint(mediaQueries),
  getTheme({mode = 'light'} = {}) {
    return this.themes[mode];
  },
  themes: {
    light: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        text: '#4d4d4d',
      },
      spacings: {
        horizontal: {
          1: `${spacer / 2}px`,
          2: `${spacer}px`,
          3: `${spacer * 1.5}px`,
          4: `${spacer * 2}px`,
        },
        vertical: {
          1: `${spacer / 2}px`,
          2: `${spacer}px`,
          3: `${spacer * 1.5}px`,
          4: `${spacer * 2}px`,
        },
      }
    },
  }
};