import React, {useState} from 'react';	

export default function Form(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // create react state for isHomework
    const [isHomework, setHomework] = useState(false);

    function toggleHomework(e) {
      
        setHomework(e.target.checked);
      
      
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (isHomework == false) {
          
          props.addTask(name, description);
        } else {
          
          props.addHomework(name, description);
        }
        
        setName('');
        setDescription('')
    }
    function handleChange(e) {
        
        setName(e.target.value)
      }
    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }
    return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor='new-todo-input'>  Item</label>
      <div id="descriptionDiv">
        
        
        <input type="text" id="descriptionBox" name="text" value={description} onChange={handleDescriptionChange}/>
        <label htmlFor='descriptionBox'>    Description</label>
        
      </div>
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
      <input
                id="homeworktoggle"
                type="checkbox"
                defaultChecked={isHomework}
                onChange={toggleHomework}
        />
        <label htmlFor='homeworktoggle'>Homework?</label>
    </form>
    )
}