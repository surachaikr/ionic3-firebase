import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImageAction } from '../../libs/util';
import { Base } from '../../libs/base';

@Component({
  selector: 'input-upload-image',
  templateUrl: 'input-upload-image.html'
})
export class InputUploadImageComponent {

  @Input() maxFileSize: number = 0;
  @Input() message: string = "";
  @Input() resizeWidth: number = 0;
  @Input() resizeHeight: number = 0;
  @Input() resizeRatio: number = 0;
  @Input() imageTargetType: string = "image/jpeg";
  @Output() imageUpload: EventEmitter<any> = new EventEmitter();

  public hasBaseDropZoneOver: boolean = false;
  public imageUploadMessage: string;
  public imageUploadedMessage: string = "";
  public isOverMaxFileSize: boolean = false;
  public isImage: boolean = false;
  public imageInvalid: string;
  public maxFileSizeInvalid: string;
  public imageURI: any;

  constructor() {
  }

  ngOnInit() {
    Base._translateService.get("IMAGE_INVALID_MESSAGE").subscribe(data => {
      this.imageInvalid = data;
    });

    Base._translateService.get("MAX_FILE_SIZE_MESSAGE").subscribe(data => {
      this.maxFileSizeInvalid = data;
    });

    if (!this.message) {
      Base._translateService.get("IMAGE_UPLOAD_MESSAGE").subscribe(data => {
        this.message = data;
      });
    }
  }

  public imageDragEnter(event) {
    event.stopPropagation();
    event.preventDefault();
    this.imageOverBase(true);
  }

  public imageDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    this.imageOverBase(true);
  }

  public imageDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    this.imageOverBase(false);
    this.genDataUriFromUploader(Array.from(event.dataTransfer.files));
  }

  public imageOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public imageSelect(event) {
    this.genDataUriFromUploader(event.srcElement.files);
  }

  public genDataUriFromUploader(files) {
    if (files.length > 0) {
      let imageAction = new ImageAction();
      let imageItem = files[files.length - 1];
      this.isImage = imageAction.isImageType(imageItem);
      this.isOverMaxFileSize = false;

      if (this.maxFileSize != 0) {
        this.isOverMaxFileSize = imageItem.size > this.maxFileSize;
      }

      if (this.isImage == true && !this.isOverMaxFileSize) {
        imageAction.genDataUriItem(imageItem, this.resizeWidth, this.resizeHeight,
          this.resizeRatio, this.imageTargetType).then(dataUri => {
            this.imageURI = dataUri;
            imageItem.targetImageURI = this.imageURI;
            imageItem.targetType = this.imageTargetType;
            this.imageUpload.emit(imageItem);
          });
      } else {
        if (!this.isImage) {
          this.imageUploadedMessage = this.imageInvalid;
        }
        if (this.isOverMaxFileSize) {
          this.imageUploadedMessage = this.maxFileSizeInvalid;
        }
      }
    }

  }
}
