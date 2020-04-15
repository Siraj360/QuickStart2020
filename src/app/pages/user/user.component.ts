import { Component } from "@angular/core";
import { GlobalState } from "../../global.state";
import { UserRxService } from "../../services/user.rx.service";
import { User } from "../../models/user";

@Component({
  selector: "user",
  templateUrl: "./user.html",
  providers: [UserRxService],
})
export class UserComponent {
  public title: String = "Employee Profiles";

  constructor(
    private globalState: GlobalState,
    private userRxService: UserRxService
  ) {
    this.globalState.notifyDataChanged("Header.title", this.title);
  }

  public users: User[] = [];

  getData() {
    this.userRxService.getUsers().subscribe((data) => {
      debugger;
      data = JSON.parse(data["_body"]);
      this.users = this.transferData(data["results"]);
    }),
      (err) => console.log(err),
      () => console.log("getUsers Complete");
  }

  transferData(data: any) {
    let userData: User[] = [];
    data.forEach((user) => {
      userData.push({
        id: `${user.id.value}-${user.nat} `,
        gender: user.gender,
        title: user.name.title,
        first: user.name.first,
        last: user.name.last,
        email: user.email,
        address1: `${user.location.street} `,
        address2: `${user.location.city} ${user.location.state} ${user.location.postcode}`,
        dob: user.dob.date,
        registered: user.registered.date,
        phone: user.phone,
        picture: user.picture.large,
        country: user.nat,
      });
    });
    return userData;
  }

  ngOnInit() {
    this.getData();
  }
}
