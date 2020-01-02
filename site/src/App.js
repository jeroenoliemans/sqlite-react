import React, {useState} from 'react';
import services  from './services';
import SloganList from './SloganList';

const App = ({ title }) => {
    const [slogans, setSlogans] = useState([]);

    services.getSlogans()
                .then((response) => {
                    let responseObject = JSON.parse(response);
                    setSlogans(responseObject.data);   
                }, (error) => {
                    console.log(error)
                });

    return (
        <SloganList slogans={slogans} />
    );
}
  
export default App;