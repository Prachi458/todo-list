import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ToDoForm from './todo-form.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data : [
        {
          title : 'React',
          description : 'React is a javacsript library',
        }
      ],
      title : '',
      description : '',
      editItem : false,
    };
  }
  handleTitle = (event) => {
    this.setState({ title : event.target.value});
  };
  handleDescription = (event) => {
    this.setState({ description : event.target.value});
  };
  addRecord = (event) => {
    event.preventDefault();
    const updatedData = [...this.state.data, {title : this.state.title, description : this.state.description}];
    this.setState({
      data : updatedData,
      editItem : false
    }); 
    event.target.reset();
   };
   handleDelete = (e) => {
     const updatedData = this.state.data.filter((item,index) => index !== e);
     this.setState({data : updatedData});
   };
   handleEdit = (e) => {
    const updatedData = this.state.data.filter((item,index) => index !== e);
    const selectedItem = this.state.data.find((item,index) => index === e);
    console.log(selectedItem);
    this.setState({
      data : updatedData,
      editItem : true,
      title : selectedItem,
      //description
    });
   };
  render(){
    return(
      <div>
      <div>
      <ToDoForm title={this.state.data} description={this.state.data} editItem={this.state.editItem}
        handleTitle ={this.handleTitle} handleDescription={this.handleDescription} addRecord={this.addRecord}/>
         {this.state.data.map((item,index) => {
        return(
          <div className="list-btn">
          <ul className="list"><li>{item.title} &nbsp; : &nbsp; {item.description}</li></ul>
          <span><button  id="edit-button"  onClick={ () => this.handleEdit(index)}>edit</button>
          <button  id="delete-button"  onClick={ () => this.handleDelete(index)}>delete</button></span>
          </div>
          );
        })
        }
     

      </div>
      </div>
    );
  }
};
ReactDOM.render(<App/>,document.getElementById("root"));
export default App;