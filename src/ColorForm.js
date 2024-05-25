import React, { useState } from 'react';
import './App.css'; 

const ColorForm = () => {
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [boxes, setBoxes] = useState([]);

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (color.trim() && size.trim() && !isNaN(size)) {
        setBoxes([...boxes, { color, size }]);
        setColor('');
        setSize('');
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <label htmlFor="color">Color: </label>
            <input
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={handleColorChange}
            placeholder="Enter color"
            style={{ marginLeft: '10px', marginRight: '10px' }}
            />
            <label htmlFor="size">Size: </label>
            <input
            type="text"
            id="size"
            name="size"
            value={size}
            onChange={handleSizeChange}
            placeholder="Enter size (px)"
            style={{ marginLeft: '10px', marginRight: '10px' }}
            />
            <button type="submit">Add</button>
        </form>
        <div className="box-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {boxes.map((box, index) => (
            <div
                key={index}
                style={{
                backgroundColor: box.color,
                width: `${box.size}px`,
                height: `${box.size}px`,
                margin: '10px'
                }}
            ></div>
            ))}
        </div>
        </div>
    );
};

export default ColorForm;