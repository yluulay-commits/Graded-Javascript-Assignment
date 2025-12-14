 Coursework 2:KGL Inventory Processing System 

// Part A: Fucntion Implementation 
 kgl_Fucntion.js

 //1. Fucntion to calculate procurement cost
fucntion 
calculateProcurementCost(tonnageInKg , pricePerKg) {
    if (
        typeof tonnageInKg !== "number" || 
        typeof pricePerKg !== "number"  ||
        tonnageInKg < 0  ||
        pricePerKg < 0 
    ) {
        return "Invalid input",
    }  

    return tonnageInKg * pricePerKg;  
  }  
 // 2. Arrow fucntion to validate buyer name 
 const validateBuyerName = (buyerName) =>  {
    if (typeof buyerName !== "string")  {
        return false;
    } 

    return buyerName.trim().length >= 2;
 };  
  
 // 3.Function to check user authorization
 fucntion checkUserAuthorization(role) {
    switch (role) {
        case "Manager":
            return "procurement_and_sales";

        case "Sales Agent":
           return "sales_only";
        case "Director":   
           return "View_aggregations"; 
    
        default: 
           return "unauthorized";
    }                
 }
 
 // Part B: Object Creation and Manipulation

 // 4. Fucntion to create a sales record object 
 fucntion createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
    return{
        id:Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
        produceName: produceName,
        tonnageInKgs : tonnage,
        buyerName: buyerName,
        salesDate: new Date(), 
        isCreditSale: false
    };
}    

// 5.Create a sales record using test data 
const salesRecord = createSalesRecord(
    "Beans", 
    1500,
    "Kato John",
    300000
);

// Add new property using dot notation 
salesRecord,branch = "Maganjo"; 

// Modify isCreditSale property 
salesRecord.isCreditSale = true; 

// Add dueDate property using bracket notation
salesRecord["dueDate"] = "2025-01-30"; 

// Get all property names and log them 
const keys = Object.keys(salesRecord); 
console.log(keys); 

// 6. for...in loop to log property names and values
for (let property in salesRecord) {
    console.log(`Property: ${property}, 
 Value: ${salesRecord[property]}`);
}  

// Part C:Loop Implementation and Data Processing

//7. Weekly Procurement Tonnage(Tradional for loop)

let weeklyTonnage = [1200, 1500, 980, 1100, 1800, 1300];

let totalTonnage = 0;

// Calculate total tonnage
for (let i = 0; i < weeklyTonnage.length; i++) {
    totalTonnage += weeklyTonnage[i];
}  
// Calculate average daily tonnage
let averageTonnage = totalTonnage /
weeklyTonnage.length;

//Log results
console.log("Total weekly tonnage:", 
totalTonnage);
console.log("Average daily tonnage:", 
averageTonnage);   
 
// 8. Credit Sales Count(for...of loop continue) 

function creditSalesRecord(buyerName, amountPaid, isCreditSale) {
    return {
        buyerName,
        amountPaid,
        isCreditSales
    };
}  

let salesRecord = [
    createSalesRecord("Ali", 500000, true),
    createSalesRecord("Sarah", 300000, false), 
    createSalesRecord("John", 0, true),
    createSalesRecord("Amina", 450000, false),
    createSalesRecord("Peter",0, true),
];

let creditCount = 0;

for (let record of salesRecords)  {
    if (record.isCreditSale === false)  {
        continue; // Skip non-credit sales
    } 
    creditCount++;
}  

console.log("Total credit sales:", 
creditCount);

// 9. Stock Check with break Statement

let inventory =[
    {produceName: "Beans", tonnage: 1200 },
    {produceName: "Maize", tonnage: 800 },
    {produceName: "G-0uts", tonnage: 0 },
    {produceName: "Soyabeans", tonnage: 600 }
];  
 for (let i = 0; i < inventory.length; i++)
{
    if (inventory[i].tonnage === 0) {
        console.log("Manager Alert:",  
 inventory [i].produceName, "is out of stock");        
        break; // Exit loop immediately
    }
}  



 
 
