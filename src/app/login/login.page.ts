import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AccountService } from '../account.service';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailDefault = {
    email: 'thanhnam@gmail.com',
    password: '123456',
  }

  email: string
  password: string
  showMessage: boolean
  message: string  
  check: boolean

 
  


  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private accountService: AccountService) { } 

 
 
  ngOnInit() {
    this.showMessage = false
    this.email = ''
    this.password = ''
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
  
  clickButton() {    
    if (this.email == '' || this.password == '') {
      this.message = 'Email và password không được để trống!'    
      this.showMessage = true
    }
    else {
      this.checkExistsAccount('full').then(resolve => {
        if (this.check) {
          this.message = 'Đăng nhập thành công!' 
          this.showMessage = true
          this.navCtrl.navigateRoot(`/trangchu`);
        }
        else {
          this.message = 'Email và password không chính xác!' 
          this.showMessage = true
        }
      })  
    }    
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

