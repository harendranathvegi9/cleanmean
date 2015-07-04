/**
 * @copyright SIELAY Ltd
 * MIT
 */

'use strict';

angular.module('users').controller('ExternalAuthenticationController', ['$scope', 'AuthProviders',
	function($scope, AuthProviders) {
		$scope.integrations = AuthProviders.get();
	}
]);
