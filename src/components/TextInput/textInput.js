import {Component} from 'react'
import {
  BgContainer,
  SaveOrEditContainer,
  SaveContainer,
} from './styledComponents'

class TextInput extends Component {
  state = {
    saveStatus: false,
    value: '',
  }

  // recording input value
  recordInput = event => {
    this.setState({value: event.target.value})
  }

  // switching to edit
  changeButton = () => {
    this.setState(prevState => ({
      saveStatus: !prevState.saveStatus,
    }))
  }

  saveResponse = () => {
    const {value} = this.state
    return (
      <SaveContainer>
        <input onChange={this.recordInput} value={value} />
        <button type="button" onClick={this.changeButton}>
          Save
        </button>
      </SaveContainer>
    )
  }

  editResponse = () => {
    const {value} = this.state
    return (
      <SaveContainer>
        <p>{value}</p>
        <button type="button" onClick={this.changeButton}>
          Edit
        </button>
      </SaveContainer>
    )
  }

  render() {
    const {saveStatus} = this.state
    return (
      <BgContainer>
        <SaveOrEditContainer>
          <h1>Editable Text Input</h1>
          {saveStatus ? this.editResponse() : this.saveResponse()}
        </SaveOrEditContainer>
      </BgContainer>
    )
  }
}
export default TextInput
