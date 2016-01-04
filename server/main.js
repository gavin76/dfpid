Meteor.publish("products", function() {
	return Products.find();
});

Meteor.publish("ingredients", function() {
	return Ingredients.find();
});