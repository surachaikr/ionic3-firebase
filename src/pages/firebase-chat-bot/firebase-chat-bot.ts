import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, LoadingController } from 'ionic-angular';
import firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-firebase-chat-bot',
  templateUrl: 'firebase-chat-bot.html',
})
export class FirebaseChatBotPage {
  @ViewChild('bottom', { read: ElementRef }) bottomRef: ElementRef;
  @ViewChild(Content) content: Content;

  chatList: any = [];
  currentUser: firebase.User;
  inputChat: string;
  userName: string = "no login";

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user;
      if (!this.currentUser.displayName) {
        this.userName = this.currentUser.uid.substr(0, 10);
      } else {
        this.userName = this.currentUser.displayName
      }
      if (this.currentUser) {
        let loading = this.loadingController.create();
        loading.present().then(() => {
          firebase.database().ref('/chat').limitToLast(20).on('child_added', snapshot => {
            this.chatList.push(snapshot);
          });
          
          setTimeout(() => {
            this.goToBottom();
            loading.dismiss();
          }, 2000);

        })
      }
      unsubscribe();
    });
  }

  chat() {
    firebase.database().ref('/chat').push({
      message: this.inputChat,
      userName: this.userName,
      createDate: new Date().getTime()
    });
    this.inputChat = "";
  }

  private goToBottom() {
    let yOffset = this.bottomRef.nativeElement.offsetTop;
    this.content.scrollTo(0, yOffset, 1000);
  }

  goToAuthen() {
    this.navCtrl.pop();
    this.navCtrl.push('FirebaseAuthenPage');
  }
}
