Meteor.publish("products", function() {
	return Products.find();
});

Meteor.publish("ingredients", function() {
	return Ingredients.find();
});

Products.allow({
	insert: function() {
		if (Meteor.user()) {
			return true;
		} else {
			console.log("Insert blocked because not logged in");
		}
	}
})