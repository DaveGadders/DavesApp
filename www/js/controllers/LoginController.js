/* LOGIN CONTROLLER */
var LoginController = 

	['$scope', '$state',

		function($scope, $state) {

			/* LOGIN CHECK */
			$scope.LogIn = function(user) {

			    $state.go('app.home');

		    };

		 $scope.fbLogin = function() {
		    
		    openFB.login(
		       
		        function(response) {
		            if (response.status === 'connected') {
		                console.log('Facebook login succeeded');
		                $scope.closeLogin();
		            } else {
		                alert('Facebook login failed');
		            }
		        },

		        {scope: 'email,publish_actions'});
		    
			}

		}

	];