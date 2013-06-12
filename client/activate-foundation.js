if (Meteor.isClient) {
  $(document).ready(function () {
		$(document).foundation(function (response) {
			console.log(response.errors);
		});
	});
}