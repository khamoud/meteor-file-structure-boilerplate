/* run on server startup */
Meteor.startup(function () {
	process.env.MAIL_URL = "smtp://xxxx%40gmail.com:yyyy@smtp.gmail.com:465";
});
