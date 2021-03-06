import React, { useState } from 'react';

function AddBuilding({handleAddBuilding}) {

const [name, setName] = useState('')
const [opened, setOpened] = useState('')
const [architect, setArchitect] = useState('')
const [city, setCity] = useState('')
const [image, setImage] = useState('')
const [description, setDescription] =useState('')

// let formData = { name, opened, architect, city, image, description }

let formData = {
	"name": name,
	"opened": opened,
	"architect_id": architect,
	"city_id": city,
	"image_url":  image ? image:'https://m.psecn.photoshelter.com/img-get/I0000AJkdFdU3w8E/s/1000?1646725782',
	"description": description
}

function handleSubmit(e) {
	e.preventDefault()
	switch (true) {
		case (formData.name.length < 1):
			alert("Please enter the building name.");
			break;
		case (!formData.architect_id || formData.architect_id === "select"):
			alert("Please select an architect.");
			break;
		case (!formData.city_id || formData.city_id === "select"):
			alert("Please select the city.");
			break;
		case (formData.opened.length < 1):
			alert("Please enter the building's date of completion.");
			break;
		case (formData.description.length < 1):
			alert("Please enter a description.");
			break;
		default:
	fetch("http://localhost:9292/buildings", {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify(formData)
	})
	.then(res => res.json())
	.then(newItem => {
	})
	handleAddBuilding()
	alert("Submitted!");

	setName('');
	setOpened('');
	setArchitect('');
	setCity('');
	setDescription('');
	setImage('');

	}
}

let form = (
	<div className='form-container'>
		<form className="add-form">
			<label>Architect:</label>
			<br></br>
                <select name="category" className="dropdown" value={architect} onChange={(e) => setArchitect(e.target.value)}>
                    <option value="select">Select architect...</option>
                    <option value="1">Albert Frey</option>
                    <option value="2">Alvar Aalto</option>
                    <option value="3">Arne Jacobsen</option>
                    <option value="4">Charles and Ray Eames</option>
                    <option value="5">E. Stewart Williams</option>
					<option value="6">Eero Saarinen</option>
					<option value="7">Frank Lloyd Wright</option>
					<option value="8">Gerrit Rietveld</option>
					<option value="9">Le Corbusier</option>
					<option value="10">Ludwig Mies Van Der Rohe</option>
					<option value="11">Marcel Breuer</option>
					<option value="12">Oscar Niemeyer</option>
					<option value="13">Paul R Williams</option>
					<option value="14">Pierre Koenig</option>
					<option value="15">Walter Gropius</option>
					<option value="16">William Pereira</option>
                </select>
            <br></br>
			<label>City:</label>
			<br></br>
                <select name="category" className="dropdown" value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="select">Select city...</option>
					<option value="13">Berlin</option>
					<option value="12">Bologna</option>
					<option value="16">Bras??lia</option>
					<option value="15">Curitiba</option>
					<option value="18">Dessau-Ro??lau</option>
					<option value="6">Dulles</option>
					<option value="2">Helsinki</option>
					<option value="19">Irvine</option>
					<option value="5">Los Angeles</option>
					<option value="9">Mill Run</option>
					<option value="7">New York City</option>
					<option value="10">Oak Park</option>
                    <option value="1">Palm Springs</option>
					<option value="14">Plano</option>
                    <option value="3">Riola</option>
                    <option value="4">Skovshoved</option>
					<option value="8">St. Louis</option>
					<option value="11">Utrecht</option>
					<option value="17">West Hollywood</option>
                </select>
            <br></br>
		</form>
		<form className='form' onSubmit={handleSubmit}>
			<label htmlFor='Form'>Building Name:</label>
			<br></br>
			<input
				className="name"
				type="text"
				id="name"
				value={name}
				placeholder="Building Name..."
				onChange={e => setName(e.target.value)}
			/>
			<br></br>
			<label htmlFor='Form'>Opened:</label>
			<br></br>
			<input
				className="name"
				type="text"
				id="opened"
				value={opened}
				placeholder="Year..."
				onChange={e => setOpened(e.target.value)}
			/>
			
			<br></br>
			<label htmlFor='Form'>Image:</label>
			<br></br>
			<input
				className="name"
				type="text"
				id="image"
				value={image}
				placeholder="Image URL..."
				onChange={e => setImage(e.target.value)}
			/>
			<br></br>
			<label htmlFor='Form'>Description:</label>
			<br></br>
			<input
				className="name"
				type="text"
				id="description"
				value={description}
				placeholder="Description..."
				onChange={e => setDescription(e.target.value)}
			/>
			<br></br>
			<br></br>
			<input className="button-35" type="submit"></input>
		</form>
	</div>
)
    return(
        <div className="info-box">
			<h3>Add a Building!</h3>
            {form}
        </div>
    )
}

export default AddBuilding;