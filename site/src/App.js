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
        services.addSlogan(sloganText)
        .then((response) => {
            console.log(response);
            getSlogans();
        }, (error) => {
            console.log(error)
        });
    };

    const removeSlogan = (dbId) => {
        console.log(dbId)
        services.deleteSlogan(dbId)
        .then((response) => {
            console.log(response);
            getSlogans();
        }, (error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        getSlogans();
    }, []);

    return (
        <React.Fragment>
            <header className="AppHeader">
                <h1>Slogans</h1>
                <SloganForm handleAddSlogan={addSlogan} />
            </header>
            <SloganList handleSlogansRemove={removeSlogan} slogans={slogans} />
        </React.Fragment>
        
    );
}
  
export default App;