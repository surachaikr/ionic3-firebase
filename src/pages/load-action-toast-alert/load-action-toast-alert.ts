import { Component } from '@angular/core';
import { IonicPage, LoadingController, ActionSheetController, ToastController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-load-action-toast-alert',
  templateUrl: 'load-action-toast-alert.html',
})
export class LoadActionToastAlertPage {
  public answer: string = "";

  constructor(public loadingController: LoadingController, public actionSheetController: ActionSheetController, public toastController: ToastController, public alertController: AlertController) {
  }

  ionViewDidLoad() {
    let loading = this.loadingController.create();
    loading.present().then(() => {
      let alert = this.alertController.create({
        title: 'Hi Alert from Ionic 3',
        message: 'Do you know about Firebase?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              this.answer = this.answer + 'No. I will try.';
            }
          },
          {
            text: 'Yes, I do.',
            handler: () => {
              loading.dismiss().then(() => {
                this.answer = this.answer + 'Yes, I do.';
                this.showActionSheet().then(() => {
                  this.answer = this.answer + ' I will do Ionic 3 and Firebase next.';
                })
              });
            }
          }
        ]
      });

      alert.onDidDismiss(() => {
        loading.dismiss();
      })

      alert.present();
    });
  }

  showActionSheet() {
    return new Promise(resolve => {
      let actionSheet = this.actionSheetController.create({
        title: 'Action Sheet, How do you know about Firebase',
        buttons: [
          {
            text: 'Search',
            role: 'destructive', //for ios only
            handler: () => {
              this.answer = this.answer + ' I find from Google search.';
            }
          },
          {
            text: 'Training',
            handler: () => {
              this.answer = this.answer + ' I know from training.';
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', //for ios only
            handler: () => {
              this.answer = this.answer + " I know with myself";
            }
          }
        ]
      });

      actionSheet.onDidDismiss(() => {
        resolve(true);
      })

      actionSheet.present().then(() => {
        this.showToast();
      });

    });
  }

  showToast() {
    let toast = this.toastController.create({
      message: 'Please read before choose the answer, Toast',
      duration: 4000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      this.answer = this.answer + " <--> ";
    });

    toast.present();
  }
}
