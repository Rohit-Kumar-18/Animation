function showRecipe(dish) {
    let recipeText = '';

    if (dish === 'pasta') {
        recipeText = `
            <h3>Pasta Recipe</h3>
            <p>Ingredients:</p>
            <ul>
                <li>200g Pasta</li>
                <li>1 tablespoon Olive Oil</li>
                <li>2 Garlic Cloves</li>
                <li>1/2 cup Parmesan</li>
                <li>1 cup Tomato Sauce</li>
            </ul>
            <p>Instructions:</p>
            <ol>
                <li>Boil water in a large pot and cook pasta according to package instructions.</li>
                <li>In a pan, heat olive oil, then sauté garlic until golden brown.</li>
                <li>Add tomato sauce and simmer for 10 minutes.</li>
                <li>Mix cooked pasta with sauce, top with parmesan, and serve.</li>
            </ol>
        `;
    } else if (dish === 'pizza') {
        recipeText = `
            <h3>Pizza Recipe</h3>
            <p>Ingredients:</p>
            <ul>
                <li>1 Pizza Dough</li>
                <li>1/2 cup Tomato Sauce</li>
                <li>1 cup Mozzarella Cheese</li>
                <li>1/2 cup Pepperoni</li>
                <li>1 tablespoon Olive Oil</li>
            </ul>
            <p>Instructions:</p>
            <ol>
                <li>Preheat oven to 200°C (392°F).</li>
                <li>Roll out pizza dough and place on a baking sheet.</li>
                <li>Spread tomato sauce on the dough.</li>
                <li>Add cheese and pepperoni.</li>
                <li>Bake for 12-15 minutes until cheese is melted and crust is golden.</li>
            </ol>
        `;
    } else if (dish === 'salad') {
        recipeText = `
            <h3>Salad Recipe</h3>
            <p>Ingredients:</p>
            <ul>
                <li>2 cups Lettuce</li>
                <li>1/2 cup Cherry Tomatoes</li>
                <li>1/4 cup Feta Cheese</li>
                <li>2 tablespoons Olive Oil</li>
                <li>1 tablespoon Lemon Juice</li>
            </ul>
            <p>Instructions:</p>
            <ol>
                <li>Wash and chop lettuce.</li>
                <li>Slice cherry tomatoes and add them to the bowl.</li>
                <li>Add feta cheese, olive oil, and lemon juice.</li>
                <li>Toss everything together and serve.</li>
            </ol>
        `;
    }

    // Set the recipe text on the webpage
    document.getElementById("recipe-text").innerHTML = recipeText;
}