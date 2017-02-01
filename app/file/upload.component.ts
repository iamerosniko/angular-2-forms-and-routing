import { Component } from '@angular/core'; 
import { FileUploader } from 'ng2-file-upload';

@Component({
    moduleId: module.id,
    templateUrl : 'upload.component.html' 
   
})
export class UploadComponent {
    public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload'});
}