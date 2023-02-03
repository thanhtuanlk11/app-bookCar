import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { NavController } from "@ionic/angular";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.page.html',
  styleUrls: ['./sigup.page.scss'],
})
export class SigupPage implements OnInit {

  emailDefault = {
    email: '1@gmail.com',
    password: '123456',
  
  }  

  email: string
  password: string
  passwordagain: string
  showMessage: boolean
  message: string  
  check: boolean
  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private accountService: AccountService) {  

  } 

  ngOnInit() {
    this.showMessage = false
    this.email = ''
    this.password = ''
    this.passwordagain =''
    this.check = false
  }
  
  async presentAlert(title: string, message: string) {
    let alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    alert.present();
  }
  getListAccount() {   
    this.accountService.getListAccountService().then(listAccount => {
      let mess = ''
      listAccount.forEach((acc, index) => {
        mess += `<p>${index + 1} - ${acc.email}</p>`                
      })
      this.presentAlert('Kết quả', mess)      
    }) 
  }
  addAccount() {    
    if (this.email == '' || this.password == '') {
      this.message = 'Email và password không được để trống!'    
      this.showMessage = true
    }    
    else {     
      this.checkExistsAccount('email').then(resolve => {
        if (!this.check) {      
          this.accountService.addAccount(this.email, this.password).then(resolve => {
            this.presentAlert('Kết quả', 'Tài khoản đã được thêm vào thành công!')
            if (this.showMessage)   
            this.message = ''  
          })  
        }  
        else {
          this.presentAlert('Kết quả', `Tài khoản ${this.email} đã có sẵn`)
        }                   
      })                                      
    }
  }
  async checkExistsAccount(type): Promise<void> {    
    this.check = false
    switch(type) {
      case 'email':
        this.accountService.getListAccountService().then(listAccount => {
          listAccount.forEach(acc => {       
            if (this.email === acc.email) {  
              this.check = true                 
            }
          }) 
        })    
        break
      case 'full':
        this.accountService.getListAccountService().then(listAccount => {
          listAccount.forEach(acc => {       
            if (this.email === acc.email && this.password === acc.password) {  
              this.check = true                 
            }
          }) 
        })    
        break
    }    
  }

}
