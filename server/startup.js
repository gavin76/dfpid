Meteor.startup(function() {

	// Initialize database and example data if none found
	if (!Products.findOne()) {
		console.log("No products yet. Creating starter data.");

		Products.insert({
			category: "skin care",
			subtype: "emollient",
			manufacturer: "Galderma",
			country: "Canada",
			brandName: "Cetaphil",
			productName: "Dailyadvance ultra hydrating lotion",
			productId: "p51657-1",
			source: "product label",
			createdBy: "default",
			createdOn: new Date(),
			ingredients: [
				"glycerin", "hydrogenated polysobutene", "cetearyl alcohol",
				"butyrospermum parkii butter", "macadamia ternifolia", "seed oil",
				"macadamia nut oil", "cyclopentasiloxane", "sodium PCA",
				"tocopheryl acetate", "acrylates", "c10-30 alkyl acylate crosspolymer",
				"benzyl alcohol", "ceteareth-20", "citric acid", "dimethiconol",
				"famesol", "panthenol", "phenoxyethanol", "sodium hydroxide",
				"sodium polyacrylate", "stearoxytrimethylsilane", "stearyl alcohol"
			]
		});
		Products.insert({
			category: "toiletry",
			subtype: "shampoo",
			manufacturer: "Some manufacturer",
			country: "Singapore",
			brandName: "Abrand",
			productName: "Shampoo contains selenium sulphide and fragrance",
			productId: "p51657asda-1",
			source: "product label",
			createdBy: "default",
			createdOn: new Date(),
			ingredients: [
				"selenium sulphide", "fragrance"
			]
		});
		Products.insert({
			category: "household",
			subtype: "disinfectant",
			manufacturer: "Some manufacturer",
			country: "Hong Kong",
			brandName: "Anotherbrand",
			productName: "Disinfectant product has bleach",
			productId: "p51657asda-1",
			source: "product label",
			createdBy: "default",
			createdOn: new Date(),
			ingredients: [
				"bleach", "fragrance"
			]
		});
		Products.insert({
			category: "household",
			subtype: "detergent",
			manufacturer: "Some manufacturer",
			country: "Hong Kong",
			brandName: "Anotherbrand",
			productName: "Detergent",
			productId: "p51657asda-1",
			source: "product label",
			createdBy: "default",
			createdOn: new Date(),
			ingredients: [
				"benzyl alcohol", "fragrance"
			]
		});

	}

	if (!Ingredients.findOne()) {
		console.log("No ingredients yet. Creating starter data");

		Products.find().forEach( function(product) {
			console.log("Processing: " + product.productName);
			addIngredient(product);
		});

	}
});

var addIngredient = function(product) {
	var ingrList = product.ingredients;
	for (var i = 0; i < ingrList.length; i ++) {
		if (!Ingredients.findOne({"name": ingrList[i]})) {
			Ingredients.insert({
				name: ingrList[i]
			})
		console.log(ingrList[i] + " added to Ingredients");
		} else { console.log(ingrList[i] + " is already in Ingredients")}
	}
}