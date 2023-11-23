function mostExpensive() {
    const items = {
      Diamond_Earrings: 980,
      Gold_Watch: 250,
      Pearl_Necklace: 4650,
    };
  
    let maxPrice = 0;
    let mostExpensiveItem = '';
  
    for (const item in items) {
      if (items[item] > maxPrice) {
        maxPrice = items[item];
        mostExpensiveItem = item;
      }
    }
  
    console.log("The most Expensive One is ", mostExpensiveItem);
  }
  
  mostExpensive();