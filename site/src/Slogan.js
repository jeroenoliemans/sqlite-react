import React from 'react';

const Slogan = ({ slogan, dbId, handleSloganRemove }) => {
    const handleRemove = (dbId) => {
        handleSloganRemove(dbId);
    }

    return (
        <div className="Slogan">
            <p>{slogan}</p>
            <button title="remove slogan" onClick={() => handleRemove(dbId)}>-</button>
        </div>
    );
}
  
export default Slogan;