const cron = require('node-cron');

cron.schedule('*/15 * * * *', () => {
  console.log('running a task every two minutes');
});