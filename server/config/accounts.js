/* accounts.js = Accounts.config(), etc. */
Accounts.urls.resetPassword = function (token) {
  return Meteor.absoluteUrl('reset-password/' + token);
};

Accounts.urls.verifyEmail = function (token) {
  return Meteor.absoluteUrl('verify-email/' + token);
};

Accounts.urls.enrollAccount = function (token) {
  return Meteor.absoluteUrl('enroll-account/' + token);
};

Accounts.config({sendVerificationEmail: false, forbidClientAccountCreation: false});

Accounts.onCreateUser(function (options, user) {
	//var fut = new Future();
	user.profile = options.profile;
	console.log(options);
 /* Stripe.customers.create({
    card: {
        number: options.cardNumber,
        exp_month: options.exp_month,
        exp_year: options.exp_year,
        cvc: options.cvc
    }
  }, function (err, res) {
      console.log(res);
      console.log(err);
      fut['return'](res);
  });
  user.billing = fut.wait();*/
	return user;
});
