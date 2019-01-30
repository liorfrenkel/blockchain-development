import facepaint from 'facepaint';
import { Object } from 'es6-shim';

const spacer = 35;
const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};
const mediaQueries = Object.values(breakpoints).map(
  bp => `@media (min-width: ${bp}px)`
);

const themes = {
  light: {
    colors: {
      bg1: '#ffffff',
      bg2: '#f2f2f2',
      text: '#4d4d4d',
      title: '#000000',
      menu: {
        normal: '#808080',
        active: '#0b0c0d',
        hover: '#0b0c0d',
      }
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
    },
    padding: {
      container: ['15px', null, null, '40px', '70px'],
    },
  },
};

export default {
  breakpoints,
  mq: facepaint(mediaQueries),
  getTheme(props = {}) {
    const {
      theme: { mode },
    } = props;
    return themes[mode];
  },
  /**
   * Convert a number or an array of numbers to strings with 'px'
   */
  sizeToPx(subject) {
    if (!subject.map) {
      if (typeof subject !== 'number' && typeof subject !== 'string') {
        return subject;
      }
      return `${subject}px`;
    }
    return subject.map(size => `${size}px`);
  },
};
