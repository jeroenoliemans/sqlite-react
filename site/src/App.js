import React, {useState, useEffect} from 'react';
import services  from './services';
import SloganList from './SloganList';
import SloganForm from './SloganForm';

const App = ({ title }) => {
    const [slogans, setSlogans] = useState([]);

    const getSlogans = () => {
        services.getSlogans()
        .then((response) => {
            let responseObject = JSON.parse(response);
            setSlogans(responseObject.data);   
        }, (error) => {
            console.log(error)
        });
    }
    
    const addSlogan = (sloganText) => {
        console.log('add', sloganText);
    }

    useEffect(() => {
        getSlogans();
    }, []);

    return (
        <main>
            <header>
                <h1>Slogans</h1>
                <SloganForm handleAddSlogan={addSlogan} />
            </header>
            <SloganList slogans={slogans} />
        </main>
        
    );
}
  
export default App;