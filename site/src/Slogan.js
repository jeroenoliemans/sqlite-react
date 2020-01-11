import React, {useState} from 'react';

const Slogan = ({ 
    slogan, 
    dbId, 
    handleSloganRemove, 
    handleSaveSlogan
}) => {
    const [sloganText, setSloganText] = useState(slogan);
    const [edit, setEdit] = useState(false);

    const handleRemove = (dbId) => {
        handleSloganRemove(dbId);
    };

    const saveSlogan = (dbId) => {
        console.log(sloganText)
        handleSaveSlogan(dbId, sloganText);
    };

    return (
        <React.Fragment>
            {edit ? (
                <div className="Slogan">
                    <input
                        id="editSlogan"
                        className="SloganInput"
                        onChange={(e) => {setSloganText(e.target.value)}}
                        value={sloganText}
                    />
                    <div className="SloganButtons">
                        <button title="save slogan" onClick={() => saveSlogan(dbId)}>⇅</button>
                        <button title="cancel" onClick={(e) => {setEdit(false)}}>↶</button>
                    </div>
                </div>
            ) : (
                <div className="Slogan">
                    <p>{sloganText}</p>
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