import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';



class NewFriend extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    resetInput() {
        this.setState({name:'', age:'', email:''})
    }

    /****   Update this.state with the values entered in input fields ***/
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    /****   On Submit call function to save new user to database ***/
    handleInput = event => {
        event.preventDefault();
        this.props.postNewFriend(this.state);
        this.resetInput();

    }

    // test = event => {
    //     console.log("SUBMITTING!");
    //     console.log(this.props.postNewFriend);
    // }

    render() {
        return (
            <Form onSubmit={this.handleInput}>
                <FormGroup>
                    <Label for='name'>Name</Label>
                    <Input type='text' 
                        name='name' 
                        id='name' 
                        placeholder='Please enter name...' 
                        value={this.state.name}
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for='age'>Age</Label>
                    <Input type='number' 
                        name='age' 
                        id='age' 
                        placeholder='Please enter your age...' 
                        value={this.state.age}
                        onChange={this.handleChange}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input 
                        type='text' 
                        name='email' 
                        id='email' 
                        placeholder='Please enter email...' 
                        value={this.state.email}
                        onChange={this.handleChange} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }

    
}

export default NewFriend;