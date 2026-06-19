// Write your code here
// Array of product names
const products = ["Laptop", "Phone", "Headphones", "Monitor"];


function logFirstProduct() {
  console.log("Laptop");}


console.log(logFirstProduct()); 

function addProduct(txt){
   return products.push(txt)
}

function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;   
    return products;            
  } else {
    return "Invalid index";     
  }
}
 

  function removeLastProduct() {
  return products.pop(); 
  }
// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
