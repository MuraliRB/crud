import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetail = () => {
    const [input,setInput] = useState({})
    const [checked, setChecked] =useState(false)
    const history = useNavigate();
    const id = useParams().id
    console.log(id);
    useEffect(()=>{
        const fetchHandler = async() => {
            await axios.get(`http://localhost:5000/books/${id}`)
            .then(res=>res.data).then(data=>setInput(data.book))
        };
        fetchHandler();

    },[id])


const sendRequest = async () => {
    await axios.put(`http://localhost:5000/books/${id}`,{
        name:String(input.name),
        author:String(input.author),
        description:String(input.description),
        price:Number(input.price),
        image:String(input.image),
        available:Boolean(checked)
    }).then(res=>res.data)
}

    const handleSubmit = (ev) =>{
        ev.preventDefault();
        sendRequest().then(()=>history("/books"))
    }

    const handleChange = (ev) =>{
        setInput((prevState)=>({
            ...prevState,
            [ev.target.name]:[ev.target.value]
        }))
    }
    console.log(input);
  return (
    <div>
     { input &&  
     (<form onSubmit={handleSubmit}>
    <Box 
    display="flex" 
    flexDirection="column" 
    justifyContent={'center'} 
    maxWidth={700}
    alignContent={"center"}
    alignSelf={"center"}
    marginLeft={"auto"}
    marginRight={"auto"}
    marginTop={1}
    >
    
    <FormLabel>Name</FormLabel>
    <TextField margin='normal' 
    fullWidth variant="outlined" 
    name="name"
    value={input.name}
    onChange={handleChange}
    />
    
    <FormLabel>Author</FormLabel>
    <TextField margin='normal' 
    fullWidth variant="outlined" 
    name="author"
    value={input.author}
    onChange={handleChange}    
    />
    
    <FormLabel>Description</FormLabel>
    <TextField margin='normal' 
    fullWidth variant="outlined" 
    name="description"
    value={input.description}
    onChange={handleChange}    
    />
    
    <FormLabel>Price</FormLabel>
    <TextField margin='normal' 
    fullWidth variant="outlined" 
    type={"number"}
    name="price"
    value={input.price}
    onChange={handleChange}    
    />
    
    <FormLabel>Image</FormLabel>
    <TextField margin='normal' 
    fullWidth variant="outlined" 
    name="image"
    value={input.image}
    onChange={handleChange}    
    />

    <FormControlLabel 
    control={<Checkbox checked={checked}/>} 
    label='Available'
    
    onChange={()=>setChecked(!checked)}/>
    <Button variant='contained' type='submit'>Update Book</Button>
    </Box>
    </form>
    )}
    </div>
  )
}

export default BookDetail