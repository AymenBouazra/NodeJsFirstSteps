const cron = require('node-cron');

const task = cron.schedule('* * * * * *', () => {
  console.log('running a task every two minutes');
});
task.stop()