export const routes = [
  {
    title: 'Backtesting',
    itemId: '/',
  },
  {
    title: 'Parameters Optimization',
    itemId: '/parameters-opt',
  },
  {
    title: 'Market Data',
    itemId: '/market-data',

    subNav: [
      {
        title: 'Convert To new Timeframe',
        itemId: '/market-data',
      },
      {
        title: 'Download to CSV',
        itemId: '/download-to-csv',
      },

      {
        title: 'Upload from Broker API',
        itemId: '/upload-from-broker-api',
      },
      {
        title: 'Upload from CSV',
        itemId: '/upload-from-csv',
      },
      {
        title: 'Deletion',
        itemId: '/deletion',
      },
      {
        title: 'Purge from Database',
        itemId: '/purge-from-database',
      },
    ],
  },
  {
    title: 'Pip Conversion',
    itemId: '/pip-conversion',
  },
];
