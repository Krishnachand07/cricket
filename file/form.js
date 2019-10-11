import React, { Component } from 'react'
import { Input, Label, Form, FormGroup, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { addText } from '../services/FormEntry/action';

class TeamForm extends Component {
  // team()
  // {
  //   return this.props.adds.map((add)=>{
  //     return(
  //       <li key={add.id}
  //       onClick={()=>this.props.addText}
  //       >{add.team}</li>
  //     );
  //   });
  // }
    constructor(props)
  {
    super(props);
    this.state={
      teama :'',
      teamb :''
    };
  }
  onActive =(a)=>
  { 
    this.setState({
      [a.target.name]:a.target.value
    })
  }
  onSub=(e)=>
  {
    e.preventDefault();
    const form ={
      teama : this.state.teama,
      teamb : this.state.teamb
    }
    console.log(form);
    this.setState({
      teama:'',
      teamb:''
    })  
  }
    render() {
        return (
            <div>
                <Form onSubmit={(a)=>this.onSub(a)}>
              <FormGroup>
                <Label style={{fontWeight:"bold"}}>Team A</Label>
                <Input onChange={(a)=>this.onActive(a)}
                value={this.state.teama}
                type="text" 
                placeholder="Enter the team A"  
                name="teama" 
                />
              </FormGroup>
              <FormGroup>
                <Label style={{fontWeight:"bold"}}>Team B</Label>
                <Input onChange={(a)=>this.onActive(a)}
                value={this.state.teamb}
                type="text" 
                placeholder="Enter the team B"  
                name="teamb" />
              </FormGroup>
              <Button
              outline 
              color="success" 
              size="md"
              >Next</Button>
            </Form>
            </div>
        );
    }
}

// function mapStateToProps(state)
// {
//   return{
//     addText : state.addText
//   };
// }

// function matchDispatchToProps(dispatch){
//   return bindActionCreators({addText:addText},dispatch)
// }

export default TeamForm;
