var user = require('../helpers/login');
var testData = require('../data/loginData.json');

module.exports = {
	'Check UI of Login page': function(client){

		var loginPage = client.page.SMSLineLoginPageObjects();
		
		client.url(testData.host);
		loginPage.expect.section('@wrap').to.be.visible;
		loginPage.expect.section('@footer').to.be.visible;
		
		var wrap = loginPage.section.wrap;
		var footer = loginPage.section.footer;
		
		wrap.assert.elementPresent('@title');
		wrap.expect.element('@title').text.to.match(/SMS/);
		wrap.expect.element('@address').to.be.visible;
		wrap.expect.section('@logInForm').to.be.visible;
		footer.expect.element('@credit').text.to.match(/Bam-boo/);

		user.isLogingIn(client)(testData.userName, testData.password);
		client.pause(500);

		var mainPage = client.page.SMSLineMainPageObjects();
		mainPage.expect.section('@headerNavigationBar').to.be.visible;
		mainPage.expect.section('@mainBody').to.be.visible;

		var mainBody = mainPage.section.mainBody;

		mainBody.expect.section('@leftSideMenu').to.be.visible;

		client.pause(1000);

		var leftSideMenu = mainBody.section.leftSideMenu;
		var openLink = leftSideMenu.elements.openLink;
		var createBase = leftSideMenu.elements.createBase;
		leftSideMenu.click(openLink.selector);
		client.pause(500);
		leftSideMenu.click(createBase.selector);

		var mainSection = mainBody.section.mainSection;
		mainSection.assert.elementPresent('@loadFileButton');
		mainSection.assert.elementPresent('@submitUploadButton');
		var loadFileButton = mainSection.elements.loadFileButton;
		var submitUploadButton = mainSection.elements.submitUploadButton;
		mainSection.setValue(loadFileButton.selector, require('path').resolve('./data/upload/testData.xlsx'))
		mainSection.click(submitUploadButton.selector);
		client.pause(4000);
		mainPage.expect.section('@modalWindow').to.be.visible;
		var okButton = mainPage.section.modalWindow.elements.okButton;
		mainPage.click(okButton.selector);

		client.end();
	}
}