import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from '../../services/services/article/article.service';
@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articleForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
    content: new FormControl(''),
    id: new FormControl('')
  });

  constructor( private articleSertvice: ArticleService,) {
   
  }

  ngOnInit() {
  }

  onSubmit() {
    this.articleForm.controls['id'].setValue(this.articleSertvice.getArticles().length + 1);
    this.articleSertvice.addArticle(this.articleForm.value);
    console.log(this.articleSertvice.getArticles());
  }

}
