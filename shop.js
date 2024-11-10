// Item Class
class Shop {
  constructor(name) {
    this.name = name;
    this.listOfPrices = [];
  }

   // Method to add an item to the shop
   addItem(name, price, unlockLevel, sprite) {
    const item = {
      name: name,
      price: price,
      unlockLevel: unlockLevel,
      sprite: sprite
    };
    this.listOfItems.push(item);
  }


    // Gets the price of a specific item in the item list
    getPrice(itemName) {
      for (let i = 0; i < this.listOfItems.length; i++) {
        const item = this.listOfItems[i];
        if (item.name === itemName) {
          return item.price;
        }
      }
      console.log(`Item ${itemName} not found.`);
      return null;
    }

    // Buys the item from the item list 
    buyItem(itemName) {
      const itemPrice = this.getPrice(itemName);
      if (itemPrice !== null && this.coins.totalCoins() >= itemPrice) {
        // PLACEHOLDER FOR WHAT TO DO WITH ITEMS

        // Now this subtracts price of item from overall coins
        this.coins.increment(-itemPrice);

      } else {
        //PLACEHOLDER FOR WHAT TO DO WHEN NOT ENOUGH FUNDS;
      }
    }
}
