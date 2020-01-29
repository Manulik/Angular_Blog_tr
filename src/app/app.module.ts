import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ThirdComponent } from './components/third/third.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleComponent } from './components/article/article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ThirdComponent,
    SidebarComponent,
    HeaderComponent,
    ArticlesListComponent,
    ArticlePreviewComponent,
    ArticleComponent,
    EditArticleComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
