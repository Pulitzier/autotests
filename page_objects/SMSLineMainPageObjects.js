module.exports = {
	sections: {
		headerNavigationBar: {
			selector: 'body div.navbar.navbar-fixed-top' 
		},
		mainBody: {
			selector: 'div.container.full',
			sections: {
				leftSideMenu: {
					selector: "div#sp-nav",
					elements: {
						openLink:  'div.sidemenu ul.menu li:first-child a[href$="base"]',
						createBase: 'div.sidemenu ul.menu li:first-child ul.sub li:first-child a[href$="base/load"]',
						userBase: 'div.sidemenu ul.menu li:first-child ul.sub li:nth-child(2) a[href$="base/list"]'
					} 
				},
				mainSection: {
					selector: 'div#sp-page div.content.clearfix div.tabbable',
					elements: {
						loadFileButton: 'form.form-horizontal input[type=file]',
						submitUploadButton: 'div.panel div.panel-body button[ng-click$="uploadAll()"]'
					}
				}
			}
		},
		modalWindow: {
			selector: 'div.modal.fade.in div.modal-content',
			elements: {
				okButton: 'div.modal-footer button[ng-click="ok()"]'
			}
		}
	}
}