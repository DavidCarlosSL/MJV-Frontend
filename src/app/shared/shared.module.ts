import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from '@angular/material/menu';

import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";

const MaterialModule = [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
]

const Pipes = [
    
]

const Components = [
    NavigationComponent,
    FooterComponent
]

@NgModule({
    imports: [
        ...MaterialModule, 
    ],
    exports: [
        ReactiveFormsModule,
        ...MaterialModule,
        ...Pipes,
        ...Components
    ],
    declarations: [
        ...Pipes,
        ...Components
    ]
})
export class SharedModule {}