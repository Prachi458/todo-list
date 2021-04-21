import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ToDoForm from './todo-form.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data : [],
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
    if(!(this.state.itemIndex) && (this.state.itemIndex!==0)){
      let updatedData = [...this.state.data, {title : this.state.title, description : this.state.description}];
      //console.log(updatedData);
      return this.setState({
      data : updatedData,
      editItem : false,
      title : '',
      description : '',
      });
    }else{
      if(!isNaN(this.state.itemIndex)){
        let updatedData = this.state.data.map((item, idx) => idx === this.state.itemIndex ? { title: this.state.title, description: this.state.description } : item);
        console.log(updatedData);
        this.setState({
          data : updatedData,
          editItem : false,
          title : '',
          description : '',
          itemIndex : null
      });
    }
   }
    event.target.reset();
   };
   handleDelete = (e) => {
     let updatedData = this.state.data.filter((item,index) => index !== e);
     this.setState({data : updatedData});
   };
   handleEdit = (e,index) => {
    let selectedItem = this.state.data.find((item,index) => index === e);
    let Index = this.state.data.findIndex((item,index) => index === e);
    //console.log(selectedItem);
    this.setState({
      editItem : true,
      title : selectedItem.title,
      description : selectedItem.description,
      itemIndex : Index,
    });
  };
  render(){
    return(
      <div>
      <div>
      <ToDoForm title={this.state.title} description={this.state.description} editItem={this.state.editItem}
        handleTitle ={this.handleTitle} handleDescription={this.handleDescription} addRecord={this.addRecord}/>
      {this.state.data.map((item,index) => {
        return(
          <div className="list-btn">
          <ul className="list"><li>{item.title} : <br/> {item.description}</li></ul>
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