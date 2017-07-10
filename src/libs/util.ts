import { FormControl } from '@angular/forms';

export class Validator {
    public static email(control: FormControl): { [s: string]: boolean } {
        //http://emailregex.com/
        if (!control.value.match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {
            return { email: true };
        }
    }
}

export class FileAction {
    public isDocumentType(item): any {
        if ((item.type.indexOf("pdf") != -1) || (item.type.indexOf("doc") != -1) || (item.type.indexOf("docx") != -1) || (item.type.indexOf("png") != -1) || (item.type.indexOf("jpeg") != -1) || (item.type.indexOf("gif") != -1)) {
            return true;
        } else {
            return false;
        }
    }

    public genDocumentItem(item: any): any {
        return new Promise(resolve => {

            let reader = new FileReader();
            reader.addEventListener("load", (event) => {
                let target: any = event.target;
                item = target.result;
                resolve(item);
            }, false);
            reader.readAsDataURL(item);
        });
    }
}

export class ImageAction {
    public isImageType(item): any {
        if ((item.type.indexOf("png") != -1) || (item.type.indexOf("jpeg") != -1) || (item.type.indexOf("gif") != -1)) {
            return true;
        } else {
            return false;
        }
    }

    public genDataUriItem(item: any, resizeWidth: number, resizeHeight: number, resizeRatio: number, imageTargetType: string): any {
        return new Promise(resolve => {

            let reader = new FileReader();
            reader.addEventListener("load", (event) => {
                let target: any = event.target;
                this.imageResize(target.result, resizeWidth, resizeHeight, resizeRatio, imageTargetType).then((imageUploadedDataUri) => {
                    resolve(imageUploadedDataUri);
                });
            }, false);
            reader.readAsDataURL(item);
        });
    }

    public imageToDataUri(imageURL: string, index: number): any {
        let data: any = { index: null, imageUri: null };
        return new Promise(resolve => {
            if (typeof imageURL === "string") {
                if (imageURL.indexOf("data:image") == -1) {
                    this.imageResize(imageURL, 0, 0, 0, 'image/jpeg').then(imageUri => {
                        data.index = index;
                        data.imageUri = imageUri;
                        return resolve(data)
                    });
                } else {
                    data.index = index;
                    data.imageUri = imageURL;
                    return resolve(data);
                }
            } else {
                data.index = index;
                data.imageUri = imageURL;
                return resolve(data);
            }
        });
    }

    public imageResize(imageData: any, resizeWidth: number, resizeHeight: number, resizeRatio: number, imageTargetType: string): any {

        return new Promise(resolve => {
            let img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');
            img.src = imageData;

            try {
                img.addEventListener("load", () => {
                    let canvas = document.createElement("canvas");

                    if (resizeWidth > 0) {
                        img.width = resizeWidth;
                    }

                    if (resizeHeight > 0) {
                        img.height = resizeHeight;
                    }

                    if (resizeRatio > 0) {
                        // RESIZE THE IMAGES RATIO
                        img.width = img.width * (resizeRatio / 100);
                        img.height = img.height * (resizeRatio / 100);
                    }

                    let ctx = canvas.getContext("2d");
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0, img.width, img.height);

                    resolve(canvas.toDataURL(imageTargetType));
                });


            } catch (e) {

            }
        });

    }
}