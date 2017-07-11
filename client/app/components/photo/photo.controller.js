class photoController {
  constructor($scope, serviceRequests, $stateParams) {

    serviceRequests.getPhoto($stateParams.id).then(response => {
      $scope.photo = response.data;
    });
  }
}

export default photoController;