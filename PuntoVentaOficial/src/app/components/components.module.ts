import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ClientListComponent } from "./client-components/client-list/client-list.component";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductListComponent } from "./products-components/product-list/product-list.component";


@NgModule({
  declarations: [
    ClientListComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  exports: [
    ClientListComponent,
    ProductListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }