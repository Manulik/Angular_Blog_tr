import { Injectable } from '@angular/core';
import{IArticle} from '../../../interfaces/article';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public articles: IArticle [] = JSON.parse(localStorage.getItem("articles")) || [
    { id:'1',
      content: '',
      title: 'Title 1',
      deccription: 'Some quick example text to build on the card title and make up the bulk of the card.',
      imageUrl: 'https://fakeimg.pl/350x200/eae0d0/000'
    },
    { id:'2',
      content: '',
      title: 'Title 2',
      deccription: 'Some quick example text to build on the card title and make up the bulk of the card.',
      imageUrl: 'https://fakeimg.pl/350x200/eae0d0/000'
    },
    { id:'3',
      title: 'Title 3',
      content: '',
      deccription: 'Some quick example text to build on the card title and make up the bulk of the card.',
      imageUrl: 'https://fakeimg.pl/350x200/eae0d0/000'
    }
  ];

  articleSource$ = new BehaviorSubject(this.articles);
  

  constructor() { }
  public getArticles(){
    return this.articles;
  }
  public getArticlesById(id){
    return this.articles.filter((article) => article.id === id)[0];
  }
  public addArticle(article: IArticle) {
    this.articles.push(article);
    this.articleSource$.next(this.articles);
    localStorage.setItem("articles", JSON.stringify(this.articles));
  }
}
