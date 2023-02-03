import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sigup',
    loadChildren: () => import('./sigup/sigup.module').then( m => m.SigupPageModule)
  },
  {
    path: 'bookingdate',
    loadChildren: () => import('./bookingdate/bookingdate.module').then( m => m.BookingdatePageModule)
  },
  {
    path: 'chinhsach',
    loadChildren: () => import('./pages/chinhsach/chinhsach.module').then( m => m.ChinhsachPageModule)
  },
  {
    path: 'gioithieu',
    loadChildren: () => import('./pages/gioithieu/gioithieu.module').then( m => m.GioithieuPageModule)
  },
  {
    path: 'hotro',
    loadChildren: () => import('./pages/hotro/hotro.module').then( m => m.HotroPageModule)
  },
  {
    path: 'taikhoan',
    loadChildren: () => import('./pages/taikhoan/taikhoan.module').then( m => m.TaikhoanPageModule)
  },
  {
    path: 'trangchu',
    loadChildren: () => import('./trangchu/trangchu.module').then( m => m.TrangchuPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'carreturntime',
    loadChildren: () => import('./carreturntime/carreturntime.module').then( m => m.CarreturntimePageModule)
  },
  {
    path: 'compensationconditions',
    loadChildren: () => import('./pages/compensationconditions/compensationconditions.module').then( m => m.CompensationconditionsPageModule)
  },
  {
    path: 'caccauhoithuonggap',
    loadChildren: () => import('./pages/caccauhoithuonggap/caccauhoithuonggap.module').then( m => m.CaccauhoithuonggapPageModule)
  },
  {
    path: 'huongdanthuexe',
    loadChildren: () => import('./pages/huongdanthuexe/huongdanthuexe.module').then( m => m.HuongdanthuexePageModule)
  },
  {
    path: 'tienichhotro',
    loadChildren: () => import('./pages/tienichhotro/tienichhotro.module').then( m => m.TienichhotroPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'hopdong',
    loadChildren: () => import('./pages/hopdong/hopdong.module').then( m => m.HopdongPageModule)
  },
  {
    path: 'dieukhoan',
    loadChildren: () => import('./pages/dieukhoan/dieukhoan.module').then( m => m.DieukhoanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
