import React, { useState } from 'react';

function NavBar() {

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
	"architect": architect,
	"city": city,
	"image":  image ? image:'https://m.psecn.photoshelter.com/img-get/I0000AJkdFdU3w8E/s/1000?1646725782',
	"description": description
}

function handleSubmit(e) {
	e.preventDefault()

	fetch("http://localhost:9292/buildings", {
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	},
	body: JSON.stringify(formData)
	})
	.then(res => res.json())
	.then(newItem => {
		console.log(newItem)
	})
}

let form = (
	<div className='form-container'>
		<form>
			<label>Architect:</label>
                <select name="category" className="dropdown" value={architect} onChange={(e) => setArchitect(e.target.value)}>
                    <option value="select">Select architect...</option>
                    <option value="Albert Frey">Albert Frey</option>
                    <option value="Alvar Aalto">Alvar Aalto</option>
                    <option value="Arne Jacobsen">Arne Jacobsen</option>
                    <option value="Charles and Ray Eames">Charles and Ray Eames</option>
                    <option value="E. Stewart Williams">E. Stewart Williams</option>
					<option value="Eero Saarinen">Eero Saarinen</option>
					<option value="Frank Lloyd Wright">Frank Lloyd Wright</option>
					<option value="Gerrit Rietveld">Gerrit Rietveld</option>
					<option value="Ludwig Mies Van Der Rohe">Ludwig Mies Van Der Rohe</option>
					<option value="Marcel Breuer">Marcel Breuer</option>
					<option value="Oscar Niemeyer">Oscar Niemeyer</option>
					<option value="Paul R Williams">Paul R Williams</option>
					<option value="Pierre Koenig">Pierre Koenig</option>
					<option value="Walter Gropius">Walter Gropius</option>
					<option value="William Pereira">William Pereira</option>
                </select>
            <br></br>
			<label>City:</label>
                <select name="category" className="dropdown" value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="select">Select city...</option>
					<option value="Berlin">Berlin</option>
					<option value="Bologna">Bologna</option>
					<option value="Brasília">Brasília</option>
					<option value="Curitiba">Curitiba</option>
					<option value="Dessau-Roßlau">Dessau-Roßlau</option>
					<option value="Dulles">Dulles</option>
					<option value="Helsinki">Helsinki</option>
					<option value="Irvine">Irvine</option>
					<option value="Los Angeles">Los Angeles</option>
					<option value="Mill Run">Mill Run</option>
					<option value="New York City">New York City</option>
					<option value="Oak Park">Oak Park</option>
                    <option value="Palm Springs">Palm Springs</option>
					<option value="Plano">Plano</option>
                    <option value="Riola">Riola</option>
                    <option value="Skovshoved">Skovshoved</option>
					<option value="St. Louis">St. Louis</option>
					<option value="Utrecht">Utrecht</option>
					<option value="West Hollywood">West Hollywood</option>
                </select>
            <br></br>

		</form>
		
		<form className='form' onSubmit={handleSubmit}>
			<label htmlFor='Form'>Building Name</label>
			<input
				className="name"
				type="text"
				id="name"
				value={name}
				placeholder="Building Name..."
				onChange={e => setName(e.target.value)}
			/>
			<br></br>
			<label htmlFor='Form'>Opened</label>
			<input
				className="name"
				type="text"
				id="opened"
				value={opened}
				placeholder="Year..."
				onChange={e => setOpened(e.target.value)}
			/>
			<br></br>
			<br></br>
			<label htmlFor='Form'>Image</label>
			<input
				className="name"
				type="text"
				id="image"
				value={image}
				placeholder="Image URL..."
				onChange={e => setImage(e.target.value)}
			/>
			<br></br>
			<label htmlFor='Form'>Description</label>
			<input
				className="name"
				type="text"
				id="description"
				value={description}
				placeholder="Description..."
				onChange={e => setDescription(e.target.value)}
			/>
			<br></br>
			<input type="submit"></input>
		</form>
	</div>
)
console.log(description)
    return(
        <div className="nav">
            {form}
        </div>
    )
}



export default NavBar;