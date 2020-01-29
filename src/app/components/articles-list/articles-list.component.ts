import { Component, OnInit } from "@angular/core";
import { IArticle } from "../../interfaces/article";
import { ArticleService } from "src/app/services/services/article/article.service";

@Component({
  selector: "app-articles-list",
  templateUrl: "./articles-list.component.html",
  styleUrls: ["./articles-list.component.scss"]
})
export class ArticlesListComponent implements OnInit {
  public articles: IArticle[];
  public subscription;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.subscription = this.articleService.articleSource$
    .subscribe((data) => {
      this.articles = data;
      console.log(data);
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}