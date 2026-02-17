import React, { useState } from 'react';


function Component() {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handlerNameChange(event) {
        setName(event.target.value);
    }

    function handlerQuantity() {
        setQuantity(event.target.value)
    }

    function handlerComment() {
        setComment(event.target.value)
    }

    function handlerPayment() {
        setPayment(event.target.value)
    }

    function handlerShipping() {
        setShipping(event.target.value)
    }

    return (
        <div>
            <h1>Your Details</h1>

            <input type="text" value={name} onChange={handlerNameChange} />
            <p>Name: {name}</p>

            <input type='number' value={quantity} onChange={handlerQuantity} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handlerComment}
                placeholder='Enter your info' />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlerPayment}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment method : {payment}</p>
            <br />
            <br />
            <label>
                <input type='radio' value="pick up" checked={shipping === "pick up"} onChange={handlerShipping} />
                Pick up
            </label>
            <br />
            <label>

                <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={handlerShipping} />
                Delivery
            </label>
        </div>
    )
}
export default Component