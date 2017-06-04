import { NgModule } from "@angular/core";
import { RegisterRoutingModule, routedComponents } from "../register/register-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [RegisterRoutingModule, SharedModule],
    declarations: [routedComponents]
})
export class RegisterModule {}