import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { NgxSelectModule } from 'ngx-select-ex'
import { TextMaskModule } from 'angular2-text-mask';
import { TagInputModule } from 'ngx-chips';
import { CustomFormsModule } from 'ng2-validation';
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from 'ng2-img-cropper';

import { SharedModule } from '../../shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { ExtendedComponent } from './extended/extended.component';
import { ValidationComponent } from './validation/validation.component';
import { UploadComponent } from './upload/upload.component';
import { CropperComponent } from './cropper/cropper.component';
import { CanalesComponent } from './canales/canales.component';

const routes: Routes = [
    { path: 'standard', component: StandardComponent },
    { path: 'extended', component: ExtendedComponent },
    { path: 'validation', component: ValidationComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'cropper', component: CropperComponent },
    { path: 'canales', component: CanalesComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxSelectModule,
        ColorPickerModule,
        TextMaskModule,
        TagInputModule,
        CustomFormsModule,
        FileUploadModule,
        ImageCropperModule
    ],
    providers: [ColorPickerService],
    declarations: [
        StandardComponent,
        ExtendedComponent,
        ValidationComponent,
        UploadComponent,
        CanalesComponent,
        CropperComponent
    ],
    exports: [
        RouterModule
    ]
})
export class FormsModule { }
