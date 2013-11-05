/* instantiate your NPM Modules */
Future = Npm.require('fibers/future');
Fiber = Npm.require('fibers');
Stripe = StripeAPI('sk_test_6FZngTnbKfj8WXh9GqtgSmMZ');
Twit = new TwitMaker({
    consumer_key:'qbq4qSKaeI9F7iFwTN5WA'
  , consumer_secret:'hi791kznlc8ihO9lufAEmPhOH3FHjcz4wbZ7spB5U'
  , access_token:'468144344-Bo3ZkOFeCvwczRZpqphqDCER2CptnKzS2R8pamws'
  , access_token_secret:'4VoeoGVRjZCzhOGGVfWb9nm0qmppWarzErpMwtaHA0'
});
