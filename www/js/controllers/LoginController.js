/* LOGIN CONTROLLER */
var LoginController = 

	['$scope', '$state',

		function($scope, $state) {

			/* LOGIN CHECK */
			$scope.LogIn = function(user) {

			    $state.go('app.home');

		    };

		}

	];