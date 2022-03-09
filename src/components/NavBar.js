import React, { useState } from 'react';

function NavBar({ archNames }) {

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

	const x = archNames.find(n => n.toLowerCase() === (architect.toLowerCase()))
	
	// if (x) {
	// 	//Find the architect_id of the matching name and assign it to our formData obj
	// }
	// else {
	// 	make a post request that creates a new architect with the name saved under 'x'
	// 	and assign that architect to our new building
	// }

	// fetch("http://localhost:9292/buildings", {
	// method: "POST",
	// headers: {
	// 	"Content-Type": "application/json"
	// },
	// body: JSON.stringify(formData)
	// })
	// .then(res => res.json())
	// .then(newItem => {
	// 	console.log(newItem)
	// })
}


let form = (
	<div className='form-container'>
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
			<label htmlFor='Form'>Architect</label>
			<input
				className="name"
				type="text"
				id="architect"
				value={architect}
				placeholder="Architect Name..."
				onChange={e => setArchitect(e.target.value)}
			/>
			<br></br>
			<label htmlFor='Form'>City</label>
			<input
				className="name"
				type="text"
				id="city"
				value={city}
				placeholder="City..."
				onChange={e => setCity(e.target.value)}
			/>
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
    return(
        <div className="nav">
            {form}
        </div>
    )
}



export default NavBar;