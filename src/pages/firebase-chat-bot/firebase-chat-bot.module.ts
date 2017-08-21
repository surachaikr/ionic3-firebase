import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseChatBotPage } from './firebase-chat-bot';

@NgModule({
  declarations: [
    FirebaseChatBotPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseChatBotPage),
  ],
})
export class FirebaseChatBotPageModule {}
