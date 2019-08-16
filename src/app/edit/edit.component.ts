import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  user: object;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.user = this.profileService.getUserProfile();
  }
  setUserProfile(userForm: NgForm): any {
    this.profileService.setUserProfile(userForm);
  }
}
