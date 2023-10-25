import { createGlobalStyle } from 'styled-components';

import PoppinsLightWoff from './Poppins-Light.woff';
import PoppinsLightWoff2 from './Poppins-Light.woff2';

import PoppinsRegularWoff from './Poppins-Regular.woff';
import PoppinsRegularWoff2 from './Poppins-Regular.woff2';

import PoppinsMediumWoff from './Poppins-Medium.woff';
import PoppinsMediumWoff2 from './Poppins-Medium.woff2';

import PoppinsSemiBoldWoff from './Poppins-SemiBold.woff';
import PoppinsSemiBoldWoff2 from './Poppins-SemiBold.woff2';

const fontFiles = [
    {
        family: 'PoppinsLight',
        woff: PoppinsLightWoff,
        woff2: PoppinsLightWoff2,
        style: 'light',
    },

    {
        family: 'PoppinsRegular',
        woff: PoppinsRegularWoff,
        woff2: PoppinsRegularWoff2,
        style: 'regular',
    },
    {
        family: 'PoppinsMedium',
        woff: PoppinsMediumWoff,
        woff2: PoppinsMediumWoff2,
        style: 'medium',
    },
    {
        family: 'PoppinsSemiBold',
        woff: PoppinsSemiBoldWoff,
        woff2: PoppinsSemiBoldWoff2,
        style: 'semibold',
    },
];

const createFontFace = ({ family, woff, woff2, style }) => `
  @font-face {
    font-family: '${family}';
    src: local('${family}'), local('${family}'),
      url(${woff}) format('woff'),
      url(${woff2}) format('woff2');
    font-style: ${style || 'normal'};
  }
`;

export default createGlobalStyle`
  ${fontFiles.map(createFontFace).join('\n')}
`;
