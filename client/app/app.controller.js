class AppController {
  constructor() {
    this.links = [
      {name: 'home', component: 'homeComponent'},
      {name: 'album', component: 'albumComponent'},
      {name: 'image', component: 'imageComponent'}
    ];
  }
}
AppController.$inject = [];
export default AppController;