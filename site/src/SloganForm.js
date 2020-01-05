import React, {useState, useEffect}  from 'react';

const SloganForm = ({handleAddSlogan}) => {
    const [addSloganText, setAddSloganText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!addSloganText.length) {
            return;
        }
        
        handleAddSlogan(addSloganText);
    }

    return (
        <form className="AppForm" onSubmit={handleSubmit}>
            <label htmlFor="newSlogan">
                Add slogans
            </label>
            <input
                id="newSlogan"
                onChange={(e) => {setAddSloganText(e.target.value)}}
                value={addSloganText}
            />
            <button>
                Add
            </button>
        </form>
    );
}
  
export default SloganForm;