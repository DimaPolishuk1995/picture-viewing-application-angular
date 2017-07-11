class homeController {
  constructor($scope, serviceRequests) {
    this.albums = [];
    $scope.visibleAlboms = [];
    this.counter = 0;

    serviceRequests.getPhotos().then(response => {
      this.albums = response.data;
      $scope.loadPhotos();
    });

    $scope.loadPhotos = () => {
      let index = this.counter;
      this.counter += 12;
      if (this.counter > this.albums.length) {
        this.counter = this.albums.length
      } else {
        for (index; index < this.counter; index++) {
          $scope.visibleAlboms.push({
            albumId: this.albums[index].albumId,
            id: this.albums[index].id,
            url: this.albums[index].url,
            title: this.albums[index].title
          });
        }
      }
    };
  }
}

export default homeController;
