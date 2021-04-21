import React from 'react';
class ToDoForm extends React.Component{
    render(){
        return(
            <div className="App">
                <form onSubmit={this.props.addRecord}>
                    <label for="Title" className="input-label">Title</label><br/>
                    <input className="inputclass" type="text" name="title" value={this.props.title} 
                        onChange={this.props.handleTitle} required/><br/>
                    <label for="Description" className="input-label">Description</label><br/>
                    <textarea className="inputclass" value={this.props.description}
                        onChange={this.props.handleDescription} required></textarea><br/>
                    <button type="Submit" className="submit-button">{this.props.editItem? 'Edit Record' : 'Add Record'}</button>
                </form>
            </div>
        );
        
    }
};
export default ToDoForm;