import { useState, useEffect } from 'react';
import fakeFetch from './utils/fakeFetch';
import Person from './components/Person';
import Header from './components/Header'
import Filter from './components/Filter'

function App() {

  const [people, setPeople] = useState([])
  const [ filter, setFilter] = useState("")

  useEffect(() => {
    const getPeople = async () => {
      const res = await fakeFetch();
      setPeople(await res.json());
    };

    getPeople();
  }, []);

  return (
    <div>
      <Header />
      <Filter setFilter={setFilter} />
    <div className="people-div d-flex flex-wrap justify-content-center">

      { people
      .filter(person => person.devLevel === filter)
      .map(person => <Person key={person.id} person={person} />) }
    </div>
    </div>

  );
}

export default App;
