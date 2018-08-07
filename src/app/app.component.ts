import { Component, OnInit } from "@angular/core";
import { progress } from "../../node_modules/@progress/jsdo/lib/progress.jsdo.js";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  getSessionResult: progress.data.JSDOSessionInfo = null;

  async ngOnInit() {
    const options: progress.GetSessionOptions = {
      serviceURI: "https://oemobiledemo.progress.com/OEMobileDemoServicesForm",
      catalogURI:
        "https://oemobiledemo.progress.com/OEMobileDemoServicesForm/static/SportsService.json",
      authenticationModel: progress.data.Session.AUTH_TYPE_FORM,
      username: "formuser",
      password: "formpassword"
    };

    try {
      this.getSessionResult = await progress.data.getSession(options);
    } catch (error) {
      console.log(error);
    }
  }
}
