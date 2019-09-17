import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  require('intl'); // eslint-disable-line
  require('intl/locale-data/jsonp/en-US'); // eslint-disable-line
}

export const { format: formatCurrency } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
