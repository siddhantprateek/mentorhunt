import React from 'react';
import './rating.style.css';
function Rating() {
  return (
    <div>
        <select name="star-rating" id="rating" className='rating'>
            <option value="null">Select rating</option>
            <option value="1">1⭐</option>
            <option value="2">2⭐⭐</option>
            <option value="3">3⭐⭐⭐</option>
            <option value="4">4⭐⭐⭐⭐</option>
            <option value="5">5⭐⭐⭐⭐⭐</option>
        </select>
    </div>
)}

export default Rating;
