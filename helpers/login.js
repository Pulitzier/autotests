module.exports = {
	'isLogingIn': function(client) {
		return function(usr,pwd){
			client.setValue('input[name=username]', usr);
			client.setValue('input[name=password]', pwd);
			client.click('button[type=submit]');
		}
	}
}