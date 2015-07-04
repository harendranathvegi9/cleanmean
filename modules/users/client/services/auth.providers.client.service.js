/**
 * @copyright SIELAY Ltd
 * MIT
 */

'use strict';

angular.module('users').factory('AuthProviders', ['$resource',
	function ($resource) {
		return $resource('api/auth', {}, {
			get : {
				isArray: true
			}
		});
	}
]);
