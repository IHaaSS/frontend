import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Answer, AnswerService, Question } from 'app/services/answer.service';
import { Incident } from 'app/model/incident';

@Component({
  selector: 'app-refinement-dialog',
  templateUrl: './refinement-dialog.component.html',
  styleUrls: ['./refinement-dialog.component.css']
})
export class RefinementDialogComponent implements OnInit, OnDestroy {
  subscription: any;
  questions: any;
  response: any;
  selections: Question[];
  answer: Answer;
  concluded: boolean;
  done: boolean;
  valAnswer;
  index;
  indexlist = [];

  constructor(
    public dialogRef: MatDialogRef<RefinementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Incident,
    private http: HttpClient,
    private answerService: AnswerService) { }


  async ngOnInit() {
    console.log('OnInit');
    this.reset();
    this.response = await this.answerService.postIncident(this.data);
    this.questions = this.response.questions[0];
    console.log(this.questions);
  }

  reset() {
    this.concluded = false;
    this.done = false;

    this.selections = [];
    this.answer = new Answer();
    this.valAnswer = 0;
    this.index = 0;
    this.indexlist.push([0]);
  }

  ngOnDestroy() {
    console.log('onDestroy');
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  onSelectionChange(questionObj, question, i, value): void {
    this.valAnswer = this.valAnswer + value;
    console.log('on Selection Change');
    console.log(i);
    console.log(questionObj);
    if (i === questionObj.questions.length - 1) {
      const selection = new Question();
      selection.value = this.valAnswer / (i + 1);
      selection.attributeId = question.attrId;
      selection.topicId = question.topicId;
      if (this.valAnswer > 0) {
        this.selections[this.index] = selection;
        if (questionObj.children !== undefined) {
          console.log('childquestions found');
          this.valAnswer = 0;
          this.indexlist.push([0]);
          console.log(this.indexlist);
          this.questions = questionObj.children[0];
        } else {
          this.index = this.index + 1;
          console.log('find next question of same level1');
          this.valAnswer = 0;
          console.log('indexlist selectionchange');
          console.log(this.indexlist);
          const temp = this.indexlist[this.indexlist.length - 1][0] + 1;
          this.indexlist.pop();
          this.indexlist.push([temp]);
          this.generateObj(this.response.questions, 0, []);
        }
      } else {
        this.index = this.index + 1;
        console.log('find next question of same level1');
        this.valAnswer = 0;
        console.log('indexlist selectionchange');
        console.log(this.indexlist);
        const temp = this.indexlist[this.indexlist.length - 1][0] + 1;
        this.indexlist.pop();
        this.indexlist.push([temp]);
        this.generateObj(this.response.questions, 0, []);
      }
    }
  }

  // nochmal get object at indexlist
  generateObj(t, i, list) {
    console.log('generarte Obj');
    console.log('i ' + i);
    if (i < this.indexlist.length) {
      console.log('index list ' + this.indexlist[i][0]);
      if (i === 0) {
        list = t[this.indexlist[0][0]];
      } else {
        list = list.children[this.indexlist[i][0]];
      }
      i = i + 1;
      console.log('liste');
      console.log(list);
      this.generateObj(t, i, list);
    } else {
      console.log('return list');
      console.log(list);
      if (list === undefined) {
        this.indexlist.pop();
        if (this.indexlist.length >= 1) {
          const temp = this.indexlist[this.indexlist.length - 1][0] + 1;
          this.indexlist.pop();
          this.indexlist.push([temp]);
          this.generateObj(t, 0, []);
        } else {
          if (this.indexlist.length > 0) {
            const temp = this.indexlist[this.indexlist.length - 1][0] + 1;
            this.indexlist.pop();
            this.indexlist.push([temp]);
            this.generateObj(t, 0, []);
          } else {
            console.log('Doooooooooooooooooone');
            console.log(this.selections);
            this.submitAnswers();
          }
        }
      } else {
        this.questions = list;
      }
    }
  }

  checkQuestions(t) {
    // if t has element ar indexlist then questions is t at index list
    // else cut index List and add +1 at end an then check again for question
    console.log('checkQuestuin');
    const result = this.generateObj(t, 0, []);
    console.log('gotten result');
    console.log(result);
    if (result === undefined) {
      this.indexlist.pop();
      if (this.indexlist.length >= 1) {
        const temp = this.indexlist[this.indexlist.length - 1][0] + 1;
        this.indexlist.pop();
        this.indexlist.push([temp]);
        this.checkQuestions(t);
      } else {
        if (this.indexlist.length > 0) {
          const temp = this.indexlist[this.indexlist.length - 1][0] + 1;
          this.indexlist.pop();
          this.indexlist.push([temp]);
          this.checkQuestions(t);
        } else {
          console.log('Doooooooooooooooooone');
        }
        console.log('submit answers');
      }
    } else {
      this.questions = result;
    }
  }

  async submitAnswers() {
    this.concluded = true;
    this.answer.id = this.response.id;
    this.answer.phase = this.response.phase;
    this.answer.answers = this.selections;
    console.log('submitting Answer');
    console.log(this.answer);


    this.response = await this.answerService.postAnswer(this.answer);
    console.log(this.response);
    if (this.response.questions.length !== 0) {
      this.reset();
      this.questions = this.response.questions[0];
      console.log(this.questions);
    } else {
      this.done = true;
    }
  }

  redirect() {
    // this._router.navigateByUrl('/incident')
  }
}
