
const { QuickDB, MySQLDriver } = require('quick.db');
module.exports = async function (config){
  if (!config || config == "") {
    return console.log('[!] QuickDB SQL - Debe proporcionar un objeto de configuración.\n\nDebe contener: host, user, password y la database');
  }
  try{
  const driver = new MySQLDriver(config);
  await driver.connect();
  const db = new QuickDB({ driver: driver });
  return db;
  }catch(e){
    return console.log(`[!] QuickDB SQL - Error on MySQL connect / config!`)
  }


 

} 