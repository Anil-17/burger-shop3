document.addEventListener('DOMContentLoaded', () => {
    const availableIngredients = [
      { name: 'Bun', img: 'images/bun.png.webp', price: 40 },
      { name: 'Lettuce', img: 'images/Lettuce.webp', price: 40 },
      { name: 'Tomato', img: 'images/tomato.jfif', price: 40 },
      { name: 'Cheese', img: 'images/Cheese.webp', price: 80 },
      { name: 'Patty', img: 'images/Patty.jpg', price: 240 },
      { name: 'Onion', img: 'images/Onions.jpg', price: 40 },
      { name: 'Pickles', img: 'images/Pickles.jfif', price: 40 },
      { name: 'Bacon', img: 'images/Backon.webp', price: 160 },
      { name: 'Ketchup', img: 'images/Ketchup.avif', price: 24 },
      { name: 'Mustard', img: 'images/Mustard.jpg', price: 24 }
    ];
  
    const availableBurgers = [
      { name: 'Classic Burger', ingredients: ['Bun','Patty', 'Lettuce', 'Tomato', 'Cheese'], price: 400, img: 'images/classic burger.jfif' },
      { name: 'Bacon Burger', ingredients: ['Bun','Patty', 'Bacon', 'Cheese', 'Onion'], price: 480, img: 'images/bacon burger.jfif' },
      { name: 'Cheese Burger', ingredients: ['Bun','Patty', 'Bacon','pickles', 'Cheese', 'Onion'], price: 480, img: 'images/cheese burger.jpg' },
      { name: 'Veggie Burger', ingredients: ['Bun','Lettuce', 'Tomato', 'Onion', 'Pickles'], price: 160, img: 'images/veggie burger.jpg' }
    ];
  
    let customBurger = [];
  
    const ingredientsButtonsContainer = document.getElementById('ingredients-buttons');
    const customBurgerButtonsContainer = document.getElementById('custom-burger-buttons');
    const burgersButtonsContainer = document.getElementById('burgers-buttons');
    const totalCostDisplay = document.getElementById('total-cost');
    const submitBurgerButton = document.getElementById('submit-burger');
  
    // Function to render the available ingredients as buttons
    const renderIngredients = () => {
      ingredientsButtonsContainer.innerHTML = '';
      availableIngredients.forEach((ingredient, index) => {
        const button = document.createElement('button');
        button.classList.add('ingredient-button');
        button.innerHTML = `<img src="${ingredient.img}" alt="${ingredient.name}"><span>${ingredient.name} - ₹${ingredient.price.toFixed(2)}</span>`;
        button.addEventListener('click', () => addIngredientToBurger(index));
        ingredientsButtonsContainer.appendChild(button);
      });
    };
  
    // Function to render the custom burger ingredients as buttons
    const renderCustomBurger = () => {
      customBurgerButtonsContainer.innerHTML = '';
      customBurger.forEach((ingredient, index) => {
        const button = document.createElement('button');
        button.classList.add('ingredient-button');
        button.innerHTML = `<img src="${ingredient.img}" alt="${ingredient.name}"><span>${ingredient.name} - ₹${ingredient.price.toFixed(2)}</span>`;
        button.addEventListener('click', () => removeIngredientFromBurger(index));
        customBurgerButtonsContainer.appendChild(button);
      });
      updateTotalCost();
    };
  
    // Function to render the available burgers as buttons
    const renderBurgers = () => {
      burgersButtonsContainer.innerHTML = '';
      availableBurgers.forEach((burger, index) => {
        const button = document.createElement('button');
        button.classList.add('burger-button');
        button.innerHTML = `<img src="${burger.img}" alt="${burger.name}"><span>${burger.name} - ₹${burger.price.toFixed(2)}</span>`;
        button.addEventListener('click', () => selectBurger(index));
        burgersButtonsContainer.appendChild(button);
      });
    };
  
    // Higher-order function to add ingredient to the burger
    const addIngredientToBurger = (index) => {
      customBurger.push(availableIngredients[index]);
      renderCustomBurger();
    };
  
    // Higher-order function to remove ingredient from the burger
    const removeIngredientFromBurger = (index) => {
      customBurger.splice(index, 1);
      renderCustomBurger();
    };
  
    // Higher-order function to select a pre-made burger
    const selectBurger = (index) => {
      customBurger = availableBurgers[index].ingredients.map(name => availableIngredients.find(ingredient => ingredient.name === name));
      renderCustomBurger();
    };
  
    // Function to update the total cost of the custom burger
    const updateTotalCost = () => {
      const totalCost = customBurger.reduce((sum, ingredient) => sum + ingredient.price, 0);
      totalCostDisplay.textContent = totalCost.toFixed(2);
    };
  
    // Submit burger button click event
    submitBurgerButton.addEventListener('click', () => {
      const burgerNames = customBurger.map(ingredient => ingredient.name);
      alert(`Your order will be at your table shortly \nTotal cost: ₹${totalCostDisplay.textContent}`);
    });
  
    // Initial render
    renderIngredients();
    renderCustomBurger();
    renderBurgers();
  });
  
