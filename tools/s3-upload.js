const s3 = require('s3-node-client');
const path = require('path');
const build = require('./build');
const task = require('./task');
const config = require('./config');

module.exports = task('upload', () => Promise.resolve()
  .then(() => Uploader)
);
const Uploader = new Promise((resolve, reject) => {
  const client = s3.createClient({
  s3Options: {
      accessKeyId: 'AKIAIZGSPQ4KFC2ERF5Q',
      secretAccessKey: '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',
      region: 'us-east-2',
      sslEnabled: true,
    },
  });
  const uploader = client.uploadDir({
    localDir: 'public/',
    deleteRemoved: true,
    s3Params: {
      Bucket: 'ywang-react1'
    },
  });
  uploader.on('error', reject);
  uploader.on('end', resolve);
});
