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

/* IDEA: Use a counter to reset index after 3 per newline */

let auditInputJSON = [];
let secCut = [];
let result = [];

function formatCSVStringToJSON() {
    const usingSplit = auditInput.split('\n');
    for(let i = 0; i < usingSplit.length; i++){
        secCut[i] = usingSplit[i].split(',');

        auditInputJSON[i] = {
            "Company Name" : secCut[i][0],
            "transactionID": secCut[i][1],
            "Amount" : secCut[i][2]
        }
    }
    console.log(auditInputJSON);
}

formatCSVStringToJSON();
