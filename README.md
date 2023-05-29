# dynamic-import-repro

### Setup instruction:
1 - Run `npm run setup`  
2 - Run `npm serve`  

----

### Issue:   
The app (`./app`) is an example client app.  
module (`./module`) is an example npm module.   

module is using webpack dynamic import and creates two file in dist - main.js and ts_dynamic_ts.js

The app (`./app`) is bundling dependency using webpack. However it's not copying chunk properly. It only copies the main.js from './`module/dist/main.js`. So it fails to load ts_dynamic_ts.js when it's required.

Expected behavior: All chunks should be copied to client app. 
