export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    grey: 'grey',
    lightblue: 'aquamarine',
    red: 'red',
    lightred: 'rgba(100, 0, 0, 0.1)',
    green: 'green',
    lightgray: 'lightgray',
    deepseablue: '#123456',
    seablue: '#C2DFFF',
    deepsea: '#3B9C9C',
    charcoalblue: '#36454F',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid rgba(0, 0, 0, 0.2)',
    deepsea: '1px solid #3B9C9C',
    lightgray: '1px solid lightgray',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    first:
      '1px 2px 4px rgba(0, 0, 0, 0.12), 1px 2px 2px rgba(0, 0, 0, 0.14), 1px 3px 2px rgba(0, 0, 0, 0.2)',
    svg: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
    second: '0px 0px 2px 7px rgba(194,223,255,1)',
    third: '0px 0px 4px 8px rgba(194,223,255,1)',
    text: '0px 0px 100px 50px rgba(194,223,255,1)',
  },
};