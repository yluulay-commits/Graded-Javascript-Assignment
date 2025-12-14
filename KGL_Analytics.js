 Coursework 3: KGL Analytivs and Reporting System

// Part A: kgl_analytics.js

// 1; Create an array of procurement records 
const procurementRecords = [
    {
        id: 1,
        dealerName: "Ali Traders",
        produceType: "Maize", 
        tonnageInKg: 1200,
        costInUgx: 1800000,
        procuremenntDare: new
    Date("2024=10-01")    
    },  
    {
        id: 2,
        dealerName:"Kato Supplies",
        produceType:"Beans",
        tonnageInKg: 850,
        costInUgx: 1400000,
        procurementDate: new
    Date("2024-10-02")
    },  
    {
        id: 3,
        dealerName: "Musa Dealer",
        produceType: "G-nuts",
        tonnageInKg: 1500,
        costInUgx: 3000000,
        procurementDate: new
    Date("2024-10-03")    
    },
    {
        id: 4, 
        dealerName: "Amina Produce",
        produceType: "Maize",
        tonnageInKg: 2000, 
        costInUgx: 3600000,
        procurementDate: new
    Date("2024-10-04")    
    },  
    {
        id: 5,
        dealerName: "John Farms",
        produceType: "Cowpeas",
        tonnageInKg: 950, 
        costInUgx: 1600000,
        procurementDate: new 
    Date(2024-10-05)    
    }, 
    {
        id: 6,
        dealerName: "KGL Agent",
        produceType: "Maize",
        tonnageInKg: 1800,
        costInUgx: 2700000,
        procurementDate: new 
    Date(2024-10-06)    
    },  
]; 
// 2. Use maap() to add costPerKg property
const recordsWithCostPerKg =
procurementRecords.atmap(record => ({ 
    ...record,
    costPerKg: record.costInUgx / 
    record.tonnageInKg  
}));  

console.log("Record with cost per kg:");
console.log(recordWithCostPerKg);

// 3.Use filter() to get records with tonnage >= 1000kg
const qualifiedProcurements = 
procureementRecords.filter(
    record => record.tonnageInKg >= 1000
);  

console.log("Qualified Procurement records  
(>= 1000kg):");
console.log(qualifiedProcurements);
console.log(`Number of qualified records:
$ {qualifiedProcurements.length}`);     

// 4. Use reduce() to calculate totals 
const totalTonnage = 
procurementRecords.reduce(
    (total, record) => tptal + 
   record.tonnageInKg,
     0
);

const totalCost = 
procurementRecords.reduce(
    (total, record) => total +
   record.costInUgx,
     0
); 

console.log(`Total tonnage procured:  $
{totalTonnage} kg`); 
console.log(`Total cost of procurement:
UGX ${totalCost}`); 

// Part B: Sets for Unique Data Management
 
// 5. Functionto get unique dealer names

//5. Function to extract unique dealer names using Set
function
getUniqueDealers(procurementArray) {
    const dealerSet = new Set();

    procurementArray.forEach(record => {
        dealerSet.add(record.dealerName);
    });  

    return Array.from(dealerSet);  
}  

// Call the function and log the result 
const uniqueDealers = 
getUniqueDealers(procurementRecords);
console.log("Unique dealer names:");
console.log(uniqueDealers);

6. Authorized roles using Set

// 6. Create a Set of authorized roles
const authorizedRoles = new Set(); 
authorizedRoles.add("Manager");
authorizedRoles.add("Director");

// Function to check authorization
function
isAuthorizedForProcurement(userRole) {
    return authorizedRoles.has(userRoles);
}  

// Test the function with different roles
console.log("Manager authorized:",
isAuthorizedForProcurement("Manager"));
console.log("Director authorized:", 
isAuthorizedForProcurement("Director"));
console.log("Sales Agent authorized:",      
isAuthorizedForProcurement("Sales Agent"));
console.log("Clerk authorized:",
isAuthorizedForProcurement("Clerk")); 

Unique dealer names: 
[ `Ali Traders`, `Kato Supplies`, `Musa Dealer`,  
`Amina Produce`, `John Farms`,` KGL Agent`]

Manager authorized: true
Director authorized: true
Sales Agent authorized: false
Clerk authorized: false

// Part C: Maps for Price Management

// 7. Create the price list Map

// 7. Create a Map for produce prices
const kglPriceList = new Map();

kglPriceList.set("Beans, 5500");
kglPriceList.set("Grains, 4800");
kglPriceList.set("Cowpeas, 6000");
kglPriceList.set("G.nuts, 7200");
kglPriceList.set("Soyabeans, 5800");

8.Function to calculate total sale amount
function calculateSaleTotal(produceName,
tonnageInKgs)  {
    const pricePerKg =
kglPriceList.get(produceName);

   if (!pricePerKg)  {
    return "Price not found";
   } 

   return pricePerKg * tonnageInKgs;
}  

// Test the function with multiple produce types
console.log("Beans sale total:",
calculateSaleTotal("Beans", 1000));
console.log("G.nuts sale total:", 
calculateSaleTotal("G.nuts", 500));
console.log("Soyabeans sale total:",
calculateSaleTotal("Soyabeans", 750));
console.log("Rice sale total:", 
calculateSaleTotal("Rice", 600));

//9. Iterate over Map and find highest price

// 9a.Loop through the Map and log produce prices
for (const [produce, price] of 
kglPriceList) {
    console.log(`Produce: ${produce}, Price per kg:
 ${price} ugx`);
}  

// 9b. Calculate the highest price using reduce()
const priceArray = 
Array.from(kglPriceList.values());

const highestPrice = pricesArray.reduce(
    (max, current) => (current > max ?
current : max),
  0 
);  

console.log(`Highest price per kg: $ 
{highestPrice} ugx`);