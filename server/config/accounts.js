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
	var fut = new Future();
	user.profile = options.profile;
  Twit.get('users/show', { screen_name: options.username }, function(err,response){
    if(err){
      console.log(err);
    }
    else
    {
      user.profile.twitterid = response.id;
    }
    
    console.log(response);
  });
  Stripe.customers.create({
    card: {
        number: options.card,
        exp_month: options.month,
        exp_year: options.year
    }
  }, function (err, res) {
      //console.log(res + " " + err);
      fut['return'](res);
  });
  user.billing = fut.wait();
	return user;
});
