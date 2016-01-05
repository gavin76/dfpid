Products = new Mongo.Collection("products");
Ingredients = new Mongo.Collection("ingredients");

Products.attachSchema(new SimpleSchema({
	category: {
		type: String,
		label: "Category",
		max: 40
	},
	subtype: {
		type: String,
		label: "Subtype",
		max: 40
	},
	manufacturer: {
		type: String,
		label: "Manufacturer",
		max: 40
	},
	country: {
		type: String,
		label: "Country",
		max: 40
	},
	brandName: {
		type: String,
		label: "Brand name",
		max: 40
	},
	productName: {
		type: String,
		label: "Product name",
		max: 60,
		unique: true
	},
	productId: {
		type: String,
		label: "Product ID (optional)",
		max: 20,
		optional: true
	},
	ingredients: {
		type: Array,
		minCount: 1
	},
	"ingredients.$": {
		type: String,
		optional: true
	},	
	source: {
		type: String,
		label: "Source",
		max: 20
	},
	createdBy: {
		type: String,
		label: "Entered by",
		max: 40
	},
	createdOn: {
		type: Date,
		label: "Date entry was created"
	},
	modifiedOn: {
		type: Date,
		label: "Date entry was modified"
	},
	reviewedBy: {
		type: String,
		label: "Reviewed by"
	},
	reviewedOn: {
		type: Date,
		label: "Date entry was reviewed"
	}
}));