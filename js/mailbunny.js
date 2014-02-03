$(document).ready(function(){
	$('#verify-button').click(function(){
		//var urlVerifier = "http://www.tenko.it/mailbunny/api.php?email="
		var urlVerifier = "http://localhost/mailbunny/api.php?email="
		var emailToCheck = $('#email-field').val();


		// We should probably regex the email
		if(emailToCheck && emailToCheck != "username@mail.com"){
			urlVerifier+=emailToCheck;
			$.getJSON(urlVerifier, function(data){

				if(data.verify_status === true){
					$('#verify-email-form').after("<div id='letter-form-container'>");
					$("#letter-form-container").load( "form.html #letter-form" );
				}

			});
		}
	});
});