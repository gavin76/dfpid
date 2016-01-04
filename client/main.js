Meteor.subscribe("ingredients");
Meteor.subscribe("products");

// Session declaration
Session.set("listingIngr", "");

// Routing

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function() {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('ingrsearch', {
    to: "main"
  });
});

Router.route('/about', function() {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('about', function() {
    to: "main"
  });
});

Router.route('/ingrsearch', function() {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('ingrsearch', {
    to: "main"
  });
});

Router.route('/prodsearch', function() {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('prodsearch', {
    to: "main"
  });
})

Router.route('/addproduct', function() {
  this.render('navbar', {
    to: "navbar"
  });
  this.render('addProduct', function() {
    to: "main"
  });
});



// Accounts configuration

Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});

// Template helpers
Template.product_list.helpers({
  products: function() {
    var findParam = Session.get("listingIngr");
    console.log("List params: " + findParam);
    return Products.find(findParam, {sort: {productName: -1}});
  }
});

Template.ingr_search.rendered = function() {
  Meteor.typeahead.inject();
}

Template.ingr_search.helpers({
  ingr: function() {
    return Ingredients.find().fetch().map(function(it) {
      return it.name;
    });
  }
});

// Template events
Template.ingr_search.events({
  "click #js-ingr-submit": function(ev) {
    ev.preventDefault();
    var search_text = $('#js-search-ingr').val().toLowerCase();
    console.log('Search for: ' + search_text);
    Session.set('listingIngr', {"ingredients": search_text});
    return false;
  }
});


