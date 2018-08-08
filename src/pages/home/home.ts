import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {RunPage} from '../run/run'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  key: string = 'username';

  constructor(
    public navCtrl: NavController,
    private storage: Storage) {

  }

  login(){
    this.storage.set(this.key, this.username);
    if(this.username == undefined || this.username.length  == 0){
      throw("Error 404: Ooops! Don't tell me you forgot your name?")
    }
    else{
      console.log("username: " + this.username);
      this.navCtrl.push(RunPage, {
        val: this.username
      })
    }
  }

}
