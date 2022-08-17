import React, {useState, useEffect} from 'react';
import PeopleCard from './PeopleCard';

function PeopleList() {

    const [people, setPeople] = useState([]);   

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch('https://swapi.dev/api/people/?format=json');
            let data = await res.json();
            setPeople(data.results);
        }
        fetchPeople();
    }, [])

    console.log('data', people);

    return (
        <div>
            <PeopleCard data={people} />
        </div>
    )
}

export default PeopleList