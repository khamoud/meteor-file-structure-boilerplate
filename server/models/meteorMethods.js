/* server only Meteor.methods */
Meteor.methods({

	createCard: function(number, exp_month, exp_year, cvc){
		Stripe.customers.create({
    card: {
        number: number,
        exp_month: exp_month,
        exp_year: exp_year,
        cvc: cvc
    }
  	},function (err, res) {
      console.log(res);
      console.log(err);
      return res;
  	});
	}
});
