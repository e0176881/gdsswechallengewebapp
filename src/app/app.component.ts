import {Component} from '@angular/core';
import {UploadService} from "./service/upload.service";
import {Subscription} from "rxjs";
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  files: File[] = [];
  uploadSubscription: Subscription;
  failedFiles: string[] = [];
  successFiles: string[] = [];

  constructor(private uploadService: UploadService, private toastr: ToastrService) {
  }


  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);

    this.files.splice(this.files.indexOf(event), 1);
    if (this.failedFiles.includes(event.name)) {
      this.failedFiles.splice(this.failedFiles.indexOf(event.name), 1);
    }
  }

  showSuccess(val) {
    this.toastr.success("Files that are uploaded successfully ", val.toString(), {timeOut: 5000});
  }

  showFailure(val) {
    this.toastr.error("Invalid format csv ", val.toString(), {timeOut: 5000});
  }

  upload() {

    this.uploadFile().then(() => {
      setTimeout(() => this.files = [], 3000);
    });
  }

  async uploadFile() {
    if (this.uploadSubscription && !this.uploadSubscription.closed) {
      this.uploadSubscription.unsubscribe();
    }
    console.log(this.files);

    for (const droppedFile of this.files) {

      this.uploadSubscription = this.uploadService.upload(droppedFile).subscribe(resp => {
          this.successFiles.push(droppedFile.name.toString())
          this.showSuccess(droppedFile.name)
        },
        err => {
          this.failedFiles.push(droppedFile.name.toString());
          this.showFailure(droppedFile.name)
          console.log("Error caught at Subscriber " + err)
        });
    }

  }

}



