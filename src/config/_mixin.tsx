// sizes for media queries
const sizes = {
  giant: 1080,
  desktop: 922,
  tablet: 768,
  phone: 576,
};

export const fontSize = {
  smallFontSize: '9px',
  normalFontSize: '12px',
  largeFontSize: '15px',
};

export const websiteTitle = 'react-typescript-template';

export const color = {
  darkmode: {
    bgColor: '#14181C',
    fontColor: '#ffffff',
    mainColor: '#f6e58d',
  },
  default: {
    bgColor: '#ffffff',
    fontColor: '#14181C',
    mainColor: '#f6e58d',
  },
};

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media: any = {
  custom: customMediaQuery,
  desktop: customMediaQuery(sizes.desktop),
  tablet: customMediaQuery(sizes.tablet),
  phone: customMediaQuery(sizes.phone),
};
