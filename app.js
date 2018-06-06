$("#submit").on("click", function() {

	// set the token globally
	//$.fn.fonoApi.options.token = "743eddbc9604459bafadb6ff519f3f89f15227830c2d6921";

	$('.api').fonoApi({
		token : "743eddbc9604459bafadb6ff519f3f89f15227830c2d6921",
		device : $('#mobName').val(),
		limit : 50,
		template : function() {

			// argument contains the data object // *returns html content
			return $.map(arguments, function(obj, i) {

				html  = '<h3>'+ obj.DeviceName + '</h3>';
				html += '<table class="table table-striped" style="width:100%">';
				html += '<tr><th>info</th><th>Description</th></tr>';

				for(var key in obj){
				  html += "<tr><td>" + key + "</td><td>" + obj[key] + "</td><tr>";
				}
				console.log(obj);
				
				html += "</table>";
				return $('<div class="table-responsive"></div>').append(html);
			});

		}
	});

});
