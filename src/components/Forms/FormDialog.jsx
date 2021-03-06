import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './Textinput';
import {WEBHOOK_URL} from '../../webhookConfig'

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: ""
    }
    this.inputName = this.inputName.bind(this)
    this.inputEmail = this.inputEmail.bind(this)
    this.inputDescription = this.inputDescription.bind(this)
  }

  inputName = (event) => {
    this.setState({ name: event.target.value})
  }

  inputEmail = (event) => {
    this.setState({ email: event.target.value})
  }

  inputDescription = (event) => {
    this.setState({ description: event.target.value})
  }

  validteEmailFormat = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return regex.test(email)
  }

  validateRequiredInput = (...args) => {
    let isBlank = false;
    for(let i = 0; i < args.length; i=(i+1)|0) {
      if(args[i] === "") {
        isBlank = true;
      }
    }
    return isBlank
  };

  submitForm = () => { //フォームバリデーションは未実装(textの有無、アドレスが正しいか？)
    const name = this.state.name
    const email = this.state.email
    const description = this.state.description
    const isBlank = this.validateRequiredInput(name, email, description)
    const isValidEmail = this.validteEmailFormat(email)

    if(isBlank) {
      alert('入力欄が空白です。')
      return false
    } else if (!isValidEmail) {
      alert('メールアドレスの書式に誤りがあります。')
      return false
    } else {
      const payload = {
        text: '問い合わせが有りました\n' +
              'お名前：' + name + '\n' +
              'Email：' + email + '\n' +
              '問い合わせ内容：\n' + description
      };
      
      fetch(WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(() => {
        alert('送信が完了しました。折返しご連絡致します。')
        this.setState({
          name: "",
          email: "",
          description: "",
        })
        return this.props.handleClose()
      })
    }
  };

  render() {
    return(
      <Dialog
      open={this.props.open}
      onClose={this.props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"問い合わせフォーム"}</DialogTitle>
      <DialogContent>
        <TextInput
          label={"お名前(必須)"} multiline={false} rows={1}
          value={this.state.name} type={"text"} onChange={this.inputName}
        />
        <TextInput
          label={"メールアドレス(必須)"} multiline={false} rows={1}
          value={this.state.email} type={"text"} onChange={this.inputEmail}
        />
        <TextInput
          label={"お問い合わせフォーム(必須)"} multiline={true} rows={5}
          value={this.state.description} type={"text"} onChange={this.inputDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.props.handleClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={this.submitForm} color="primary" autoFocus>
          送信
        </Button>
      </DialogActions>
    </Dialog>
    )
  }
}