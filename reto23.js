function organizeChristmasDinner(dishes) {
    let ingredients = {};

    for (let dish of dishes) {
        let [dishName, ...dishIngredients] = dish;
        for (let ingredient of dishIngredients) {
            if (!ingredients[ingredient]) {
                ingredients[ingredient] = [dishName];
            } else {
                ingredients[ingredient].push(dishName);
            }
        }
    }

    let result = Object.entries(ingredients)
        .filter(([ingredient, dishes]) => dishes.length > 1)
        .map(([ingredient, dishes]) => [ingredient, ...dishes.sort()]);

    result.sort((a, b) => a[0].localeCompare(b[0]));

    return result;
}