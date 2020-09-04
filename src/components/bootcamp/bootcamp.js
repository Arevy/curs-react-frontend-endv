import React from 'react'
import './bootcamp.css';

const BootcampComponent = props => {
    const {bootcamp: {name, description, id }} = props;
    const DeleteBootcamp = props.DeleteBootcamp;
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{description}</p>
            <button onClick={() => DeleteBootcamp(id)}>Delete</button>
        </div>
    )
}

export default BootcampComponent;
