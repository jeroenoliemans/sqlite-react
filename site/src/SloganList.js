import React from 'react';
import Slogan from './Slogan';

const SloganList = ({ 
    slogans, 
    handleSlogansRemove,
    handleSloganUpdate 
}) => {
    const listSlogansComponents = slogans.map((slogan, index) => 
            <Slogan 
                handleSloganRemove={handleSlogansRemove}
                handleSaveSlogan={handleSloganUpdate} 
                key={slogan.id} 
                dbId={slogan.id} 
                slogan={slogan.slogan} />
     );

    console.log(listSlogansComponents);

    return (
        <section className="Slogans">{listSlogansComponents}</section>
    );
}
  
export default SloganList;