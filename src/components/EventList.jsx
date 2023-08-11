import React from "react";
import "./EventList.css";

import { FaTrash } from 'react-icons/fa6'

const EventList = ({persons, handleDelete}) => {
  return (
    <ul className="events-list">
      {persons && persons.map((event) => {
        return (
          <li key={event.id} className="items">
            <div className="item">
            <img src={event.image} alt="User-img" />
            <span>
              <h3>{event.name}</h3>
              <p>{event.age} years</p>
            </span>
            </div>
            <FaTrash onClick={() => handleDelete(event.id)} className="trash-icons"/>
          </li>
        );
      })}
    </ul>
  );
};

export default EventList;
