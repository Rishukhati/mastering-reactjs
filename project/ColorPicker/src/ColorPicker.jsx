import React, { useState } from "react"

function ColorPicker() {
    const [color, setColor] = useState("#ffff")

    function handleColor() {
        setColor(event.target.value)
    }

    return (
        <div className="color-picker-container">
            <h2>Color picker</h2>
            <div className="color-display" style={{ background: color }}>
                <p>Slected color : {color}</p>
            </div>

            <label > Select a color:</label>
            <input type="color" value={color} onChange={handleColor} />
        </div>
    )
}
export default ColorPicker