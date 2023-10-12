import { run } from "./app/app";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
//import "./main.css"
import "./main.scss";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
console.log("Yey");
console.log("Yey");
console.log("Yey");
//alert("Hello from Webpack")
