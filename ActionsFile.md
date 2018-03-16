Steps
ng new smart-phonebook
npm install bootstrap --save
npm install jquery@1.9.1 --save
npm install popper.js@^1.12.9
Freeze Version in Package.json file--for Freezing dependency version
Include bootstrap /jquery / popper js in angular cli file

 "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
      "scripts": [
        "../node_modules/jquery/jquery.min.js",
        "../node_modules/popper.js/dist/umd/popper.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
      ],
      
 remove 2 lines in boostrap package.json file
 
 offcanvas css need to moved to appcomponent.css file
