"use strict";
const auditInput = `Acme Corporation,I3223,24319.71
Acme Corporation,I4593,54812.08
Globex,I3306,2200.00
Initech,I4981,7719.00
Initech,I2435,7185.85
Globex,I3937,11586.25
Acme Corporation,I6677,4401.48
Initech,I6672,31.94
Initech,I6570,11832.20
Globex,I6601,9672.00
Globex,I5104,1556.65
Acme Corporation,I6578,2841.73
Initech,I0193,5000.00
Acme Corporation,I6612,1617.25`;


/*Part 1
 1. Write a function named formatCSVStringToJSON that formats the string auditInput above into a JSON object.
    - your JSON object should be structured like so
 
sampleJSON = {
    "Company Name": { "transactionID": 10000,
                      "transactionID": 10000,
                      "transactionID": 10000  },
    "Company Name": { "transactionID": 10000,
                      "transactionID": 10000,
                      "transactionID": 10000  },
 
}
 
    Hints
    - Using the method .split() should be very useful
    - note, you can use the method and argument .split(\n) to split a string on the newlines
*/

function formatCSVStringToJSON() {
    var auditInputJSON = JSON.stringify(auditInput);
    var iterate = JSON.parse(auditInputJSON).split('\n').length; //control for loop
    var count = 1;
    for (let i=1; i < iterate; i++) {
        var organized = auditInput.split('\n');
        console.log(count + ": " + organized);
        count++
    }
    
    console.log("Given: \n\n" + auditInputJSON);
    console.log("\nIterations: " + JSON.parse(auditInputJSON).split('\n').length); //debugging
    console.log(JSON.parse(auditInputJSON));
    
    

    // Object.entries(auditInputJSON).forEach(([key, value]) => {
    //     console.log(key, value);
    // });
    // var count = 1;
    // for (let i=1; i < iterate; i++) {
    //     var organized = auditInput.split('\n');
    //     console.log(count + ": " + organized);
    //     count++
    // }
};

function companyName() {
    
};

formatCSVStringToJSON();