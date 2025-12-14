// Course Work 1: KGL Data Validation System 

// Part A : Variable Declaration and Type Checking 

// Company name will not change, so we use const
const companyName = "Karibu Groceries LTD";

// Minimum tonnage is a fixed rule, so const is appropriate 
const minimumTonnage= 1000;
// Operational status is constant (true/false), is appropriate 
const isOperational = true;

// Manager name may change later, so weuse let and do not assign a value yet
let managerName;

// Branches status can change in future so let is used
let closedBranches =  null;

/*
Using typeof to check and log the data types
*/
console.log(typeof companyName);    //
string 
console.log(typeof minimumTonnage); //
number  
console.log(typeof isOperational);  //
boolean 
console.log(typeof managerName);   //
undefined 
console.log(typeof closedBranches); //
object (this is a known Javascript behaviour)

// Part B: Dtring Manipulation and Validation

Step 4: Declaree input variable 
let dealerNameInput = "james BOND";

Step 5: Clean and format the name 

// Remove leading and trailing spaces
let trimmedName = dealerNameInput.trim(); 

// Convert to proper title case 
let cleanDealerName = trimmedName 
  .to LowerCase()
  .split(" ")
  .filter(word => word !== "")
  .map(\word =>
 word.charAt(0).toUpperCae() + 
 word.slice(1))  

 // Log using template litral 
 console.log(`Cleaned Dealer Name: $         
  {cleanDealerName}`);  

  Step 6: Validation check 

  if (cleanDealerName.length >= 2 &&  
    cleanDealerName !== "") {
        console.log("Valid dealer name");  
    } else {
        console.log("Invalid dealer name");  
    }
  
    Part C: Conditional Logic & Business Rules 

    Step 7: Create variables 

    let userRole = "Sales Agent";
    let procurementTonnaage = 1500;  

    let produceType = "Beans";  
    let costInUgx = "50000";

    Step 8: Business rules using if...else if...else

        if (userRole === "Sales Agent") {
            console.log("ERROR: Sales agents are not allowed  
            to record produceType.");  
         }    
           else if (procurementTonnage < 1000) {
            console.log("ERROR: Tonnage must not be less than 1000kg.");
         }    
           else {
            let cost = Number(costInUgx); 

            if (cost < 10000) {
                console.log("ERROR: Cost must be at least digits.");
            } else {
                console.log("Procurement rules paased.");
            }
         }   

         Step 9. Logical AND (&&) check   

         let isOperationalValid = 
            procurementTonnage >= 1000 && 
          Number(costInUgx) >= 10000;  

          if (isOperationalValid) {
            console.log("Procurement record valid");  
          } else {
            console.log("Procurement record invalid");
          }
          
          Part D: Arrays and Produce Management

          // 10. Create an array named kglProduce 
          let kglProduce = [`Beans` , `Grain Maize` , `Cow peas` ,`G-nuts` ,
          `Soyabeans` ,];
          
          // 11.Array operations

          // a) Add a new produce type to the end of the array
          kglProduce.push(`Green Peas`);

          // b) Remove the first item from the array (oldest stock sold)
          kglProduce.shift(); 

          // c) Check if "G-nuts" exists in the array 
          let hasGnuts = 
          kglProduce.includes(`G.nuts`); 
          console.log(`G.nuts exists:`, hasGnuts);  

          // d) Log the final array and its length 
          console.log(`Final kglProduce array:`, kglProduce); 
          console.log(`Array length:`,
           kglProduce); 
           // 12. Create a second array 
           let branch2Produce = [`Maize`, `Beans`,];

           // Merge both arrays using concat()
           let allProduve = 
           kglProduce.concat(branch2Produce);

           // Log the merge array 
           console.log(`All Produce:`, allProduce);
           
           
  