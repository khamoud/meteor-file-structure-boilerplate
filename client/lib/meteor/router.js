Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
  this.route('home', {
    path: '/',
    template: 'home'
  });
  

	this.route('buyerLogin',{
		path: '/login',
		template: 'buyerLogin'
	});
  
  
  this.route('sellerLogin',{
  	path: '/merchants',
  	template: 'sellerLogin'
  });

});
