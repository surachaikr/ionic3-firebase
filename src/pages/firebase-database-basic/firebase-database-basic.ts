import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-firebase-database-basic',
  templateUrl: 'firebase-database-basic.html',
})
export class FirebaseDatabaseBasicPage {
  createDate: any;
  dataJson: string;
  dataList: any = [];
  currentUser: firebase.User = null;

  constructor(public navCtrl: NavController) {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user;
      this.readRealtimeData();
      unsubscribe();
    });
  }

  readRealtimeData() {
    let nameDataRef = firebase.database().ref('myFriends');
    nameDataRef.on('value', (snapshot) => {
      this.dataJson = JSON.stringify(snapshot.val());
    });
  }

  readOneTimeData() {
    let nameDataRef = firebase.database().ref('myFriends');
    nameDataRef.once('value', (snapshot) => {
      this.dataJson = JSON.stringify(snapshot.val());
    });
  }

  push() {
    let newFriendRef = firebase.database().ref('myFriends').child(this.currentUser.uid).push({
      title: 'นาย',
      name: 'สุรชัย',
      emails: {
        em1: 'surachaikr@gmail.com',
        em2: 'surachai@actvee.com'
      },
      createDate: new Date().getTime()
    });
  }

  set() {
    firebase.database().ref('myFriends').child(this.currentUser.uid).set({
      title: 'นาย',
      name: 'สุรชัย',
      emails: {
        em1: 'surachaikr@gmail.com',
        em2: 'somsak@actvee.com'
      },
      createDate: new Date().getTime()
    });
  }

  update() {
    firebase.database().ref('myFriends').child(this.currentUser.uid).update({
      emails: {
        em1: 'surachaikr@gmail.com',
        em2: 'som@actvee.com'
      },
      createDate: new Date().getTime()
    });
  }

  delete() {
    firebase.database().ref('myFriends').child(this.currentUser.uid).remove();
  }

  // Transaction
  like() {
    let likeRef = firebase.database().ref('myFriends').child('like');
    likeRef.transaction(like => {
      for (let i = 0; i < 5000; i++) { console.log('LIKE') }
      like++;
      return like;
    });
  }

  unlike() {
    let unlikeRef = firebase.database().ref('myFriends').child('like');
    unlikeRef.transaction(like => {
      console.log('UNLIKE')
      like--;
      return like;
    });
  }

  list() {
    this.dataList = [];
    firebase.database().ref('myFriends').child(this.currentUser.uid).once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        this.dataList.push(JSON.stringify(childSnapshot.val()));
        return false;
      });
    });
  }

  orderByValue() {
    this.dataList = [];
    firebase.database().ref('myFriends').child(this.currentUser.uid).orderByValue().once('value', (snapshot) => {
      console.log(JSON.stringify(snapshot.val()))
      snapshot.forEach((childSnapshot) => {
        this.dataList.push(JSON.stringify(childSnapshot.val()));
        return false;
      });
    });
  }

  filter() {
    this.dataList = [];
    firebase.database().ref('myFriends').child(this.currentUser.uid).limitToFirst(2).once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        this.dataList.push(JSON.stringify(childSnapshot.val()));
        return false;
      });
    });
  }

  goToAuthen() {
    this.navCtrl.pop();
    this.navCtrl.push('FirebaseAuthenPage');
  }
}
