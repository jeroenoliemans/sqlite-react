import React from 'react';
import Slogan from './Slogan';

const SloganList = ({ slogans }) => {

    const listSlogansComponents = slogans.map((slogan, index) => 
            <Slogan key={slogan.id} slogan={slogan.slogan} />
     );

    console.log(listSlogansComponents);

    return (
        <div>{listSlogansComponents}</div>
    );
}
  
export default SloganList;