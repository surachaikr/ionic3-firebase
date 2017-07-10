import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileAction } from '../../libs/util';
import { Base } from '../../libs/base';

@Component({
  selector: 'input-upload-file',
  templateUrl: 'input-upload-file.html'
})
export class InputUploadFileComponent {

  @Input() maxFileSize: number = 0;
  @Input() message: string = "";
  @Output() fileUpload: EventEmitter<any> = new EventEmitter();

  public hasBaseDropZoneOver: boolean = false;
  public isFileDocument: boolean = false;
  public isOverMaxFileSize: boolean = false;
  public fileUploadedMessage: string;
  public fileDocumentInvalid: string;
  public maxFileSizeInvalid: string;

  constructor() {

  }

  ngOnInit() {
    Base._translateService.get("FILE_INVALID_MESSAGE").subscribe(data => {
      this.fileDocumentInvalid = data;
    });

    Base._translateService.get("MAX_FILE_SIZE_MESSAGE").subscribe(data => {
      this.maxFileSizeInvalid = data;
    });

    if (!this.message) {
      Base._translateService.get("FILE_UPLOAD_MESSAGE").subscribe(data => {
        this.message = data;
      });
    }
  }

  public fileDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    this.fileOverBase(false);
    this.uploadFile(Array.from(event.dataTransfer.files));
  }

  public fileDragEnter(event) {
    event.stopPropagation();
    event.preventDefault();
    this.fileOverBase(true);
  }

  public fileDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    this.fileOverBase(true);
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileSelect(event) {
    this.uploadFile(event.srcElement.files);
  }

  public uploadFile(files: any) {
    /*    for (let i = 0; i < files.length; i++) {
          console.log(files[i].name);
          console.log(files[i]);
        }*/

    if (files.length > 0) {
      let fileAction = new FileAction();
      let item = files[files.length - 1];
      this.isFileDocument = fileAction.isDocumentType(item);
      this.isOverMaxFileSize = false;

      if (this.maxFileSize != 0) {
        this.isOverMaxFileSize = item.size > this.maxFileSize;
      }

      if (this.isFileDocument == true && !this.isOverMaxFileSize) {
        let fileItem: any = {};
        fileItem.fileObject = item;
        fileItem.fileType = item.type;
        fileItem.filename = item.name;
        fileAction.genDocumentItem(item).then(fileDocument => {
          fileItem.fileDocument = fileDocument;
          this.fileUpload.emit(fileItem);
        });

      } else {

        if (!this.isFileDocument) {
          this.fileUploadedMessage = this.fileDocumentInvalid;
        }
        if (this.isOverMaxFileSize) {
          this.fileUploadedMessage = this.maxFileSizeInvalid;
        }
      }
    }
  }
}
