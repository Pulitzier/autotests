module.exports = {
	sections: {
		wrap: {
			selector: 'body div#wrap',
			elements: {
				title: "h1",
				address: 'div.container.cutaway address'
			},
			sections: {
				logInForm: {
					selector: 'div.container form.form-signin',
					elements: {
						nameField: "input[name=username]",
						pwdField: "input[name=password]",
						submit: 'button.btn-success'
					}
				}
			}
		},
		footer: {
			selector: 'body div.footer2',
			elements: {
				credit: 'div.container p.credit'
			}
		}
	}
}