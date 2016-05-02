export class MainController {
  constructor ($scope, $firebaseArray) {
    'ngInject';

    this.bikeFormEdit = false;
    this.ref = new Firebase('https://peddlepedals.firebaseio.com/bikes');
        
    this.bikes = $firebaseArray(this.ref);
  }

  removeBike(bike) {
    this.bikes.$remove(bike);
  }

  addBikeForm() {
    this.bikeFormEdit = !this.bikeFormEdit;
  }

  updateBike(form, bike) {
    bike.edit = false;
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    this.bikes.$save(bike);
  }

  addBike(form) {
    if (this.imageUrl === undefined) {
      this.imageUrl = null
    }
    this.bikes.$add({ name: this.bikeName, desc: this.desc, imageUrl: this.imageUrl, edit: false });
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
  }

}
