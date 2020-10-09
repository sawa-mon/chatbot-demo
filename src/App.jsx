import React from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css'
import { AnswersList, Chats } from "./components/index"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //初期状態のstateの管理
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this) //これでthis.selectAnswerがbindされたコールバック関数になる
    //renderのたびに毎回コールバック関数を生成されるのを防ぐことで、bindを使用しパフォーマンス低下を防ぐ
  }

  displayNextQuestion = (nextQuestionId) => { //nextQuestionIdを引数にとっておこなう
    const chats = this.state.chats //chatsをstateとして受け取る
      chats.push({ //chatsに対してpushする
        text: this.state.dataset[nextQuestionId].question, //pushの内容 => 現在のstateのdatasetの中の選択されたQuestionIdのquestionを入れる
        type: 'question'
      })

      this.setState({ //新しく配列に加えたchatsをsetStateで更新
        answers: this.state.dataset[nextQuestionId].answers, //次の質問一覧が欲しいため次のdatasetの更新を行う
        chats: chats,
        currentId: nextQuestionId //回答が選択されると次の質問が分かるので入れる
      })
    }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        this.displayNextQuestion(nextQuestionId)
        break;
      default:
        const chats = this.state.chats; //現在の状態を変数をもたせて取得
        chats.push({ //chatsは最初は空の配列だが、"chat"の連想配列をpushしてやる
        //stateを直接書き換える様な下記の記述は再レンダリングされない為NG！！
        // chats: this.state.chats.push(chat)
        text: selectedAnswer,
        type: 'answer'
        })
    
        //Reactでstateを置き換える時は必ずsetStateを使用して書き換える
        this.setState({ // 選択された回答をchatsに追加してchatsを更新する
          chats: chats
        })
        
        this.displayNextQuestion(nextQuestionId) //先程作成した関数を呼び出す引数は()内
        break;
    }
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers
    })
  }

      componentDidMount() {
        const initAnswer = "";
        this.selectAnswer(initAnswer, this.state.currentId)
      }


  render () {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer}
           //select={this.selectAnswer()} <=()は無し[ついてるとrender毎にコールバック関数が走る為]}
          />
        </div>
      </section>
    );
  }
}
