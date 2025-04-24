import React from 'react'
import { useState } from 'react'


function Form() {

const [formData, setFormData] = useState({
    name: '',
    email: '' 
})
// Handle changes to the inputs
const handleChange = (e) => {
const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log('Form submitted:', formData);
    // You can send formData to an API or process it as needed
  };
  return (
    <div>
          <form onSubmit={handleSubmit}>
              <label>Name: </label>
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
              >
              </input>
              
              <label>Email: </label>
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
              >
              </input>
            <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form