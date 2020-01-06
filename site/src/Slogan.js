import React, {useState} from 'react';

const Slogan = ({ slogan, dbId, handleSloganRemove }) => {
    const [edit, setEdit] = useState(false);

    const handleRemove = (dbId) => {
        handleSloganRemove(dbId);
    }

    return (
        <React.Fragment>
            {edit ? (
                <div className="Slogan">
                    <input
                        id="editSlogan"
                        className="SloganInput"
                        onChange={(e) => {setAddSloganText(e.target.value)}}
                        value={slogan}
                    />
                    <div className="SloganButtons">
                        <button title="save slogan" onClick={() => saveSlogan(dbId)}>⇅</button>
                        <button title="cancel" onClick={(e) => {setEdit(false)}}>↶</button>
                    </div>
                </div>
            ) : (
                <div className="Slogan">
                    <p>{slogan}</p>
                    <div className="SloganButtons">
                        <button title="edit slogan" onClick={(e) => {setEdit(true)}}>✎</button>
                        <button title="remove slogan" onClick={() => handleRemove(dbId)}>❌</button>
                    </div>
                </div>
            )}     
        </React.Fragment>
    );
}
  
export default Slogan;