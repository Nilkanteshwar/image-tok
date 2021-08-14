import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    redirectTo:'upload'
  },
  
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'upload',
        loadChildren: () =>
          import('../upload/upload.module').then(
            (m) => m.UploadPageModule
          ),
      },

    ],
  } , 
  
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(
            (m) => m.HomePageModule
          ),
      },

    ],},

    {
      path: '',
      component: TabPage,
      children: [
        {
          path: 'profile',
          loadChildren: () =>
            import('../profile/profile.module').then(
              (m) => m.ProfilePageModule
            ),
        },
  
      ],}
     
   
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
