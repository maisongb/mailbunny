$(document).ready(function(){
	$('#verify-button').click(function(){
		var urlVerifier = "http://www.tenko.it/mailbunny/api.php?"
		//var urlVerifier = "http://localhost/mailbunny/api.php?"
		//var urlSender = "http://localhost/mailbunny/message.php?";
		var urlSender = "http://www.tenko.it/mailbunny/message.php?";
		var emailToCheck = $('#email-to-verify').val();
		// We should probably regex the email
		if(emailToCheck && emailToCheck != "username@mail.com"){
			urlVerifier+= "email=" + emailToCheck;
			$.getJSON(urlVerifier, function(data){
				if(data.verify_status === true){
					$('#verify-email-form').after("<div id='letter-form-container'>");
					$("#letter-form-container").load( "form.html #letter-form", function(){

							$('#email-to').text(emailToCheck);

							$('#send-letter-button').click(function(){
								var offer = $('input[name=offer]:checked', '#offer-container-radio').val();
								var emailFrom = $('#email-from').val();
								urlSender+= "emailTo=" + emailToCheck;
								urlSender+= "&emailFrom=" + emailFrom;
								urlSender+= "&offer=" + offer;

								$.ajax({
									url: urlSender,
									context: document.body
								}).done(function() {
									alert("Message sent!");
								});
						});
					});
				}
			});
		}
	});
});