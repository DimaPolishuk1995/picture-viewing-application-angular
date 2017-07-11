class ServiceRequests {

  constructor($http) {

    this.getPhotos = () => {
      const options = {
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/photos'
      };
      return $http(options);
    };

    this.getPhotosInAlbums = (id) => {
      const options = {
        method: 'GET',
        url: `http://jsonplaceholder.typicode.com/albums/${id}/photos`
      };
      return $http(options);
    };

    this.getPhoto = (id) => {
      const options = {
        method: 'GET',
        url: ` http://jsonplaceholder.typicode.com/photos/${id}`
      };
      return $http(options);
    };
  }
}

ServiceRequests.$inject = ['$http'];
export default ServiceRequests;