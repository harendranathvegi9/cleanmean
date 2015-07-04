/**
 * @copyright SIELAY Ltd
 * MIT
 */

'use strict';

module.exports = {
	client: {
		lib  : {
			css  : [
				'public/lib/bootstrap/dist/css/bootstrap.css'

			],
			js   : [
				'public/lib/angular/angular.js',
				'public/lib/angular-local-storage/dist/angular-local-storage.min.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-file-upload/angular-file-upload.js'

			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	}
};
