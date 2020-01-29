import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "../../services/services/article/article.service";
import{ IArticle } from '../../interfaces/article';

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {

  public id;
  public article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.article = this.articleService.getArticlesById(this.id);
  }
}