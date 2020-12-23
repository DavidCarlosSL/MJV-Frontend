import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

const MaterialModule = [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
]

const PipesModule = [
    
]

@NgModule({
    imports: [],
    exports: [
        ReactiveFormsModule,
        ...MaterialModule,
        ...PipesModule
    ],
    declarations: [
        ...PipesModule
    ]
})
export class SharedModule {}