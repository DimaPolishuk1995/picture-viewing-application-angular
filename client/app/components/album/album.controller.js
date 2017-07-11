class albumController {
  constructor($scope, serviceRequests, $stateParams) {
    this.photos = [];
    $scope.visiblePhotos = [];
    this.counter = 0;

    serviceRequests.getPhotosInAlbums($stateParams.id).then(response => {
      this.photos = response.data;
      $scope.loadPhotos();
    });

    $scope.loadPhotos = () => {
      let index = this.counter;
      this.counter += 12;
      if (this.counter > this.photos.length) {
        this.counter = this.photos.length
      } else {
        for (index; index < this.counter; index++) {
          $scope.visiblePhotos.push({
            albumId: this.photos[index].albumId,
            id: this.photos[index].id,
            url: this.photos[index].url,
            title: this.photos[index].title
          });
        }
      }
    };
  }
}

export default albumController;