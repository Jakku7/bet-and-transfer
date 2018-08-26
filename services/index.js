require('module-alias/register');
const http = require('http'),
      betandtransferAPI = require('@betandtransferAPI'),
      betandtransferServer = http.Server(betandtransferAPI),
      betandtransferPORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';
betandtransferServer.listen(betandtransferPORT, LOCAL, () => console.log(`betandtransferAPI running on ${betandtransferPORT}`));