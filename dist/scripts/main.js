var user = new UserModel();
var App = Backbone.Router.extend({

	routes: {
		'': 'profile',
		'edit': 'edit'
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();
		$('#name').val(use.get('name'))
		$('#email').val(use.get('name'))
		$('#role').val(use.get('name'))
	}
});

var app = new App();
Backbone.history.start();

		$('#model-form').on('submit', function(e)){
			e.prevent.Default();
			user.set({
				name: $('name').val(),
				email: $('#inputEmail3').val(),
				role: $(#'role').val()

	});

	// user.save();
});

user.on('change', function(newModel){
	$('name').html(newModelget('name'));
	$('role').htmlnewModelget('role'));

});

