import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { ThirdComponent } from './components/third/third.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleComponent } from './components/article/article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';



const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'edit', component: EditArticleComponent },
  { path: 'articles', children: [
    {
      path: '',
      component: ArticlesListComponent
    },
    {
      path: ':id',
      component: ArticleComponent
    },
  ]},
  {
    path: 'edit',
    component: EditArticleComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
