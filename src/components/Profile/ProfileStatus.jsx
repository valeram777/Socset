import React from 'react'

class ProfileStatus extends React.Component {
 state = {
     editMode: false,
     status: this.props.status
 }
 isActive = () =>{
this.setState({
    editMode: true
})
 }
 isInactive = () => {
    this.props.updateStatus(this.state.status)
     this.setState({
         editMode: false
     })
 
 }
 inputChange = (e) => {
this.setState({
    status: e.currentTarget.value
})
 }
 componentDidUpdate ( prevProps, prevState){
    if(prevState.status !== this.state.status){
        this.setState({
            status: this.props.status
        })
    }
 }

    render () {
        if (!this.state.editMode) {
            return (   <div>
                <div onDoubleClick={this.isActive}>{this.state.status}</div>
                </div>
            )
        }
            else if(this.state.editMode) {
    return (
        <div><input value = {this.state.status} autoFocus={true} onBlur = {this.isInactive} onChange = {this.inputChange}></input></div>
    )
}
    }
}


export default ProfileStatus