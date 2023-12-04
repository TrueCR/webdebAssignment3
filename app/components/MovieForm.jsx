import React, { useState } from 'react';

const MovieForm = ({ onSave, onCancel, initialData }) => {
  const [formData, setFormData] = useState(initialData || { title: '', year: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div>
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
      <br />
      <label>Year:</label>
      <input type="text" name="year" value={formData.year} onChange={handleInputChange} />
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default MovieForm;
