const API_URL = 'http://justine-cavaglieri.com/NouDogs/web';
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

/*.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})*/
    .controller('HomeCtrl', function($scope, $http) {
        var ads = {};
        $http.get( API_URL + '/api/ads').success(function(data) {
            $scope.ads = data;
        }).error(function() {
            console.log('erreur de connexion');

        });
    })
    .controller('SingleCtrl', function($scope, $stateParams, $http) {
        $http.get( API_URL + '/api/ads/'+ $stateParams.id).success(function(data) {
            $scope.ads = data; console.log(data);
        })
            .error(function() {
                console.log('erreur de connexion');

            });
    })
    .controller('SendCtrl', function($scope, $http) {

        $scope.formData = {} ;

        $scope.processForm = function() {
            $http({
                method  : 'POST',
                url     : API_URL + '/ads/create',
                data    : $scope.formData,  // pass in data as strings
                // set the headers so angular passing info as form data (not request payload)
                crossDomain: true,
                contentType: "application/json, charset=utf-8"

            })
                .success(function(data) {
                    console.log(data);
                    $scope.message = "Successfull !";
                }).error(function(){

                    if($scope.formData.title == null) {
                        $scope.error = "Vous n'avez pas rempli tous les champs";
                    }
                    if($scope.formData.pics == null) {
                        $scope.error = "Vous n'avez pas rempli tous les champs";
                    }
                    if($scope.formData.name_ad == null) {
                        $scope.error = "Vous n'avez pas rempli tous les champs";
                    }
                    if($scope.formData.phone == null) {
                        $scope.error = "Vous n'avez pas rempli tous les champs";
                    }
                    if($scope.formData.email == null) {
                        $scope.error = "Vous n'avez pas rempli tous les champs";
                    }
                    if($scope.formData.content == null) {
                        $scope.error = "Vous n'avez pas rempli tous les champs";
                    }


                });

        };
    })

    .controller('EditCtrl', function($scope, $stateParams, $http) {

        $scope.formData = {} ;

        $scope.changeForm = function() {
            $http({
                method  : 'POST',
                url     : API_URL + 'ads' + $stateParams.id + '/edit',
                data    : $scope.formData  // pass in data as strings
                // set the headers so angular passing info as form data (not request payload)
            })
                .success(function (data) {
                    console.log(data);
                    $scope.message = "Votre annonce à bien été changé";
                })
        };
    })

    .controller('DeleteCtrl', function($scope, $http) {
        $scope.formData = {} ;

        $scope.deleteForm = function() {
            $http({
                method: 'POST',
                url: API_URL + '/ads_delete/{{ad.id}}',
                data: $scope.formData  // pass in data as strings
                // set the headers so angular passing info as form data (not request payload)
            })
                .success(function (data) {
                    console.log(data);
                    $scope.message = "Delete !";
                })
        };
    })

.controller('PlaylistCtrl', function($scope, $stateParams) {
        });