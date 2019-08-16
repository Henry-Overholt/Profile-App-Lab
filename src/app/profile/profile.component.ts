import { Component, OnInit, Input } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: object;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.user = this.profileService.getUserProfile();
  }
  editProfile(): void {
    this.profileService.editProfile();
  }
}
