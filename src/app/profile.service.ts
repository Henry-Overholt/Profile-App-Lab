import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  user: object = {
    name: "Henry Overholt",
    contact: "henrysoverholt@gmail.com",
    bio:
      "I am making a profile App for a lab, to practice angular.  More specifically I am practicing routing, services, and binding. "
  };
  constructor(private router: Router) {}
  getUserProfile(): object {
    return this.user;
  }
  setUserProfile(userForm) {
    this.user = {
      name: userForm.value.name,
      contact: userForm.value.contact,
      bio: userForm.value.bio
    };
    this.router.navigate(["profile"]);
  }
  editProfile() {
    this.router.navigate(["/edit"]);
  }
}
