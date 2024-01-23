import { Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            todos:[],
         };
    }

    handelChange = (event) =>{
        let userInput = event.target.value;
        this.setState({inputText: userInput});
    }
    handelClick = () =>{
        this.setState({
            todos: [...this.state.todos, this.state.inputText],
            inputText: '',
        });
    }
    handelUpdate = (index) => {
        let updateInput = prompt("Enter your text to update !!!");
    
        let updatedTodos = this.state.todos.map((el, i) => {
            if (i === index) {
                return updateInput;
            }
            return el;
        });
    
        this.setState({ todos: updatedTodos });
    }

    handelDelete = (index) => {
        let updatedTodos = this.state.todos.filter((el, i) => i !== index);
        this.setState({ todos: updatedTodos });
    }
    
    render() {
        return (
            <>
                <h1>Todo Application </h1>
                <div className="main-cointainer">
                    <input type="text" placeholder="Enter your task here !!!" onChange={this.handelChange} 
                    value={this.state.inputText} />
                    <button onClick={this.handelClick} className="main-btn">Add Todo</button>
                    </div>
                    <div className="user-container">
                    {this.state.todos.map((el ,i)=>{
                        return <div key={i}>
                            <p>{el}</p>
                            <button onClick={() => this.handelUpdate(i)}>Update</button>
                            <button onClick={() => this.handelDelete(i)}>Delete</button>
                        </div>
                    })}
                </div>
            </>
        );
    }

}
export default App;
