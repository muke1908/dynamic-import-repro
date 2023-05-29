# dynamic-import-repro

### Setup instruction:
1 - Run `npm run setup`  
2 - Run `npm serve`  

----

### Issue:   
The app (`./app`) is an example client app.  
module (`./module`) is an example npm module.   

The app (`./app`) is bundling dependency using webpack. However it's not copying chunk properly. 
It only copies the main.js from './`module/dist/main.js`
