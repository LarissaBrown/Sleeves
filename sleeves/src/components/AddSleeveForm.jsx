import React, { useState } from 'react'

export default function AddSleeveForm(props){
    const initInputs = { image: props.image || "", title: props.title || "" }
    const [inputs, setInputs]= useState(initInputs)

function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault()
    props.submit(inputs)
    setInputs(initInputs)
}

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="image"
                value={inputs.image}
                onChange={handleChange}
                placeholder="Title"
                />
            <input
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Title"/>
            <button>{props.btnText}</button>
        </form>
        </>
    )
}