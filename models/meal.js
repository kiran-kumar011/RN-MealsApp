class Meal {
	constructor(
		id,
		categoryIds,
		title,
		affordability,
		complexity,
		imageUrl,
		duration,
		ingredients,
		method,
		isGlutenFree,
		isVegan,
		isVegetarian,
		isLactoseFree,
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affordability = affordability;
		this.complexity = complexity;
		this.imageUrl = imageUrl;
		this.duration = duration;
		this.ingredients = ingredients;
		this.method = method;
		this.isGlutenFree = isGlutenFree;
		this.isVegetarian = isVegetarian;
		this.isVegan = isVegan;
		this.isLactoseFree = isLactoseFree;
	}
}


export default Meal;