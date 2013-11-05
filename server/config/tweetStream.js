var stream = Twit.stream('statuses/filter', { track: '#send' });

stream.on('tweet', function (tweet) 
{

	Fiber(function()
  {

    var count = Meteor.users.find({"username": tweet.user.screen_name.toLowerCase()}).count();
    var user = Meteor.users.findOne({"username": tweet.user.screen_name.toLowerCase()});
    if(count){
      var loc = tweet.text.indexOf('$');
      var arr = tweet.text.slice(loc);
      var loc2 = arr.split(' ');
      var amount = loc2[0].substr(1);
      amount = Number(amount)*100;
      var stripeAmount = Math.floor(amount * 0.029 + 0.3);
      var fee = Math.floor(amount * 0.021 + 0.3);
      var userTransfer = amount - stripeAmount - fee;
      var transfers = tweet.entities.user_mentions;
     	if(transfers)
      {
		    for(var i = 0; i < transfers.length; i++)
		    {
		    	var pay = Meteor.users.findOne({'username':transfers[i].screen_name});
		    	console.log("I have to pay " + pay);
		    	if(pay && pay.recipient)
		    	{
				    Stripe.charges.create({
				        amount: amount,
				        currency: "USD",
				        customer: user.billing.id,
				        card: user.billing.default_card
				    },
				    function (err, res) 
				    {
				    	console.log(err);
				    	console.log(res);
				    	if(!err){
				    		
				    		Stripe.transfers.create({
						  		amount: userTransfer,
						  		currency: "USD",
						  		recipient: pay.recipient[0].id,
						  		description: 'Paytagz money transfer' 
				    		},function(err, transfer){
				    			console.log('i got to here');
				    			console.log(err);
				    			console.log(transfer);
				    		});
				    		
				    		Stripe.transfers.create({
				    			amount: fee,
				    			currency: "USD",
				    			recipient: 'self',
				    			description: 'Pay to Kris Hamoud'
				    		},function(err, transfer){
				    			console.log(err);
				    			console.log(transfer);
				    		});
				    	}
				    });
				  } 
		    }
			}
  	}
  }).run();
});
