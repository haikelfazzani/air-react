import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Air React',
  // brandUrl: 'https://example.com',
  // brandImage: 'https://place-hold.it/350x150',
});

addons.setConfig({
  theme,
})