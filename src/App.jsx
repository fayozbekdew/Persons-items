import { useState } from 'react';
import EventList from './components/EventList';
import server from './data/db'

function App() {
  const [persons, setPersons ] = useState(server)
  const handleDelete = (value) => {
    setPersons(persons.filter((item) => {
      return item.id !== value
    }))
  }
  console.log(persons);
  return (
    <div className="container">
      <h1>{persons ? persons.length : 0} birthdays today</h1>
      <EventList handleDelete={handleDelete} persons={persons}/>
     {persons.length ?  <button onClick={() => setPersons([])} className="clear-btn">Clear all</button> : null}
     {!persons.length &&  <button onClick={() => setPersons(server)} className="clear-btn">Refresh</button>}
    </div>
  )
}

export default App
