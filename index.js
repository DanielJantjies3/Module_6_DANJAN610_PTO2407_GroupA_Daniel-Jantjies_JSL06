// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML

    const menuContainer = document.getAnimations('menu');
    if (!menuContainer) {
        console.error('Menu Container Not Found');
        return;
    }

    // Loop through each category and its items in the menu object

    for (const category in menu) {

        const categoryElement = document.createElement ('h3'); // Create an element to represent the category
        categoryElement.textContent = category;  // Set the text content of the category element to the category name
        menuContainer.appendChild(categoryElement); // Append the category element to the menu container

    // Create an element to represent a list of items

    const itemsList = document.createElement('ul')

        // Loop through the items in the category and create list items

    menu [category].forEach(item => {

        const listItem = document.createElement('li'); // Create a list item element
        listItem.textContent = item;  // Set the text content of the list item element to the item name
        listItem.addEventListener('click', () => addToOrder(item)); // Attach a click event listener to the list item to add it to the order
        itemsList.appendChild(listItem);  // Append the list item to the list of items

    });
    
    menuContainer.appendChild(itemsList); // Append a list of items element to the menu container
            
  }

}

// Callback function for adding an item to the order
function addToOrder(itemName) {
   
   const orderItems = document.getElementById('order-items');  // Get the order items list and the order total element from the HTML
   const orderTotalElement = document.getElementById('order-total');  // Create a list item for the order
   const orderItem = document.createElement('li');   // Create a list item for the order
   orderItem.textContent = itemName; // Set the text content of the list item to the item name
    
   orderItems.appendChild(orderItem);  // Append the list item to the order items list

    // Calculate and update the total price
   
    const price = 79.99;
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + price;

    orderTotalElement.textContent = newTotal.toFixed(2);  // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
