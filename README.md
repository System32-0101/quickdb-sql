# QuickDB SQL EasyConnect
A simple library to connect to a MySQL Database using QuickDB

## Install
```
npm install quickdb-sql
```

## Usage
### Library require must be asynchronous
```javascript
  let db = await require('quickdb-sql')({
    host: "ip",
    user: "mysql_user",
    password: "mysql_password",
    database: "db_name"
});

  let sample = db.table('example');
  await sample.set('lib', 'made by systemm32');

```
#### Configuration Object
* host **REQUIRED**
* user
* password
* database

## Easy MySQL connect using QuickDB by Systemm32!
