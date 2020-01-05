import React from 'react';

const Slogan = ({ slogan, dbId, handleSloganRemove }) => {
    const handleRemove = (dbId) => {
        handleSloganRemove(dbId);
    }

    return (
        <div className="Slogan">
            <p>{slogan}</p>
            <button onClick={() => handleRemove(dbId)}>remove</button>
        </div>
    );
}
  
export default Slogan;