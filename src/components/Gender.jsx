import React, { useState } from 'react';

const GenderForm = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gender);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleGenderChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleGenderChange}
        />
        Female
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GenderForm;