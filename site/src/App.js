import React, {useState, useEffect} from 'react';
import services  from './services';
import SloganList from './SloganList';

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
    
    useEffect(() => {
        getSlogans();
    }, []);

    return (
        <SloganList slogans={slogans} />
    );
}
  
export default App;