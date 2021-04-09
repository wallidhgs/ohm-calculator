# Ohm online calculator

## Setup

### Requirements

- [NodeJS](https://nodejs.org/en/download/) V14.X preferred
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)*
- [Powershell](https://github.com/PowerShell/PowerShell), not mandatory but suggested
- [Chrome](https://www.google.com.mx/intl/es-419/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/)

Notes:

**Ensure your mysql instance have legacy authentication compatibility (5.x compatibility - login with mysql_native_password)*

### MySQL Setup

- If you are installing for the first time use the following configuration (otherwise check MySQL existing server section)

```txt
user: "root"
password: "toor"
```

And use default port


- Open your SQLManager (Workbench or similar)
- Execute mysql script under resources `./resources/ohm_db.sql`
- Script finishes with a select that must return **14** rows

### MySQL Existing Server

If you dont want to use suggested credentials for root user or already have an existing server:

- Create a user for `ohm_db` (created on previous step) with reading privileges
- Update login on `./config/default.json` and `./config/test.json`
- Search for `host`, `user` and `password` and update the values
- Document should look similar to this

```json
    ...
    "mysqlConfig": {
        "host": "mysqlServerHost",
        "user": "myNewUser",
        "password": "myCustomPassword",
        "database": "ohm_db"
    },
    ...
```

Note:
*Ensure this new user can login with `mysql_native_password`*
This current app version will asume mysql is on default port

### Project Setup

- Open a powershell terminal and `cd` to your project root
- Execute `npm install`

If you have the following output you are good to go:

```bash
PS C:\ohmCalculator> npm install
npm WARN deprecated natives@1.1.6: This module relies on Node.js's internals and will break at some point. Do not use it, and update to graceful-fs@4.x.
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated sinon@10.0.1: Breaking change found in this patch version

added 1034 packages, and audited 1034 packages in 53s

66 packages are looking for funding
  run `npm fund` for details       

found 0 vulnerabilities

PS C:\ohmCalculator>
```

#### Verify Tests

This step is optional, but in order to check if everything is ok with your setup is reccommended to run all tests:

- Open a powershell terminal and `cd` to your project root
- Execute `npm run test`

If all tests passed, then your setup was done properly

```bash
PS C:\ohmCalculator> npm run test      

> learn-starter@0.1.0 test     
> jest express/tests --coverage

 PASS  express/tests/helpers.test.js (5.298 s)
 PASS  express/tests/api.test.js (5.361 s)
------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------|---------|----------|---------|---------|-------------------
All files               |   81.25 |    82.14 |   84.21 |    83.1 |
 api                    |   61.54 |       50 |   57.14 |   66.67 |
  bandRange.js          |   85.71 |      100 |   66.67 |   85.71 | 5
  calculator.js         |   52.63 |       50 |      50 |   58.82 | 11-14,18-20
 helpers                |   90.74 |     87.5 |     100 |   91.49 |
  dbUtils.js            |   84.62 |    66.67 |     100 |      84 | 8-9,20-21
  ohmValueCalculator.js |   96.43 |    94.44 |     100 |     100 | 38
------------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        9.281 s
Ran all test suites matching /express\\tests/i.
PS C:\\ohmCalculator>
```

#### Server Setup

- Open a powershell terminal and `cd` to your project root
- Execute `npm run server`

If you have the following output you are good to go:

```bash
PS C:\ohmCalculator> npm run server

> learn-starter@0.1.0 server
> node express

Back End app listening at http://localhost:3001
```

##### Server live test (optional)

If you are using powershell or bash, you can query a backend resource from another terminal while server is live:

`curl "http://localhost:3001/v1.0/band_range"`

the output should be like this:

```bash
PS C:\ohmCalculator> curl "http://localhost:3001/v1.0/band_range"
{"res":[{"color":"black","band":0,"multiplier":0,"tolerance":null},{"color":"brown","band":1,"multiplier":1,"tolerance":1},{"color":"red","band":2,"multiplier":2,"tolerance":2},{"color":"orange","band":3,"multiplier":3,"tolerance":0.05},{"color":"yellow","band":4,"multiplier":4,"tolerance":0.02},{"color":"green","band":5,"multiplier":5,"tolerance":0.5},{"color":"blue","band":6,"multiplier":6,"tolerance":0.25},{"color":"violet","band":7,"multiplier":7,"tolerance":0.1},{"color":"grey","band":8,"multiplier":8,"tolerance":0.01},{"color":"white","band":9,"multiplier":9,"tolerance":null},{"color":"gold","band":null,"multiplier":-1,"tolerance":5},{"color":"silver","band":null,"multiplier":-2,"tolerance":10},{"color":"pink","band":null,"multiplier":-3,"tolerance":null},{"color":"none","band":null,"multiplier":null,"tolerance":20}]}
PS C:\ohmCalculator> 
```

#### Client Setup

```txt
Important note:
Client must be executed after server is running.
```

- Open a powershell terminal and `cd` to your project root
- Execute `npm run client`

If you see an output like this with the event- compiled successfuly you are good to go:

```bash
PS C:\ohmCalculator> npm run client

> learn-starter@0.1.0 client
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Using webpack 4. Reason: future.webpack5 option not enabled https://nextjs.org/docs/messages/webpack5
(node:16528) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module 
resolution of the package at C:\git_continental\nodejs\ohmCalculator\node_modules\postcss\package.json.        
Update this package.json to use a subpath pattern like "./*".
(Use `node --trace-deprecation ...` to show where the warning was created)
event - compiled successfully
```

### Using calculator

- On your favorite web browser go to: `http://localhost:3000/`
- By default nothing is selected and results will show `?` below `Resistance`, `Minimum` and `Maximum`
- Use the checkboxes in the chart to select 1 for each Band (column)
- When all the 4 column have 1 value selected the results will be showed below `Resistance`, `Minimum` and `Maximum`

If a column is empty, then that column is not supported by the color code.

## Notes & Additionals

- Server & Client must run on different terminals, do not close server to open client
- DB Records based on: <https://en.wikipedia.org/wiki/Electronic_color_code>
- Original Exercise on: `./resources/Coding Challenge_Apr2021.pdf`

### Additional Endpoints

#### /health

If you want to ping backend, this will provide information about the version in addition to server as ping:

```json
{
  "version": "1.0"
}
```

#### /config

This endpoint allows to see configuration of config file consumed, while service is alive.
The endpoint is protected by headers `usr` & `pass`, this have 3 possible responses:

If no crendentials are provided: 403 forbidden

```txt
{
  "error": "No credentials sent"
}
```

If wrong credentials provided: 405 not allowed

```txt
{
    "error": "Wrong credentials"
}
```

If valid credentials provided: 200 Ok

```txt
{
  "appConfig": {
    ...
  },
  "dbConfig": {
    ...
  }
}
```

Default Credentials are shown below and can be modified on `./config/default.json` file:

```json
"configCheck": {
  "usr": "123",
  "pass": "qwe"
}
```

#### Default handler

Any route that is not provided, will show 405 (Not Allowed)

In this example, doing Get on `/health2`

```json
{
    "error": "/health2 resource not allowed"
}
```

### Considerations

- Javascript does not support interfaces, however the Exercise interface is implemented on: `./express/helpers/ohmValueCalculator.js`
- On method `CalculateOhmValue` 4th parameter was not necessary, but was implemented as per requirement
- Method `CalculateOhmValue` as per interface should return `int`, however in some scenarios the value can be decimal, example:

```txt
CalculateOhmValue('brown', 'black', 'silver', 'gold') -> returns 0.1
```

- Additional functions were implemented to show tolerance minimum & maximum
- As per exercise, only backend was tested
