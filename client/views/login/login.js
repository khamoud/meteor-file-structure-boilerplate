Template.buyerLogin.events({
	'submit #form': function(e){
		e.preventDefault();
		var cardNumber = $('#cardNumber').val();
		var cvc = $('#cvc').val();
		var exp_month = $('#exp_month').val();
		var exp_year = $('#exp_year').val();
		console.log(cvc + ' ' + cardNumber + ' ' + exp_month + ' ' + exp_year);
		if(Stripe.card.validateCardNumber(cardNumber) &&
			Stripe.card.validateExpiry(exp_month, exp_year)&&
			Stripe.card.validateCVC(cvc))
		{
			
			Meteor.loginWithTwitter(function(err){
        if (err){}
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
        else{

        }
          // The user has been logged in.
      });
      return false; 
      

		/*Meteor.loginWithStripe({},
		function(err){
			console.log(err);	
		});*/
	}
});
