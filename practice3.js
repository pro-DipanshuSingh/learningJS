//For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
 let item = [250, 645, 300, 900, 50];
let updated_array = []
for (i=0; i<item.length; i++){
 updated_array[i] = item[i] - (item[i]/10);
}
console.log("updated value", updated_array);