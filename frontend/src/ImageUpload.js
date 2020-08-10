import React from 'react';
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function ImageUpload() {
  
  const [image, setImage] = React.useState("http://loremflickr.com/300/200");

  const handleChange = (event) => {
    setImage(event.target.value);
  }
  const handleUpload = (event) => {
    setImage(window.URL.createObjectURL(new Blob(event.target.files[0], {type:"image/png"})))
  }
  return (
    <React.Fragment>
      <div> 
				<div>
        	<img src={image}/>
				</div>
				<Select onChange={handleChange} value={"http://loremflickr.com/300/200"}>
          <MenuItem value={"http://loremflickr.com/300/200"}>Cat</MenuItem>
          <MenuItem value={"http://loremflickr.com/320/240"}>Cat</MenuItem>
          <MenuItem value={"http://loremflickr.com/640/480"}>Cat</MenuItem>
				</Select>
        <Button
          variant="contained"
					size="small"
          component="label"
          onChange={handleChange}>
          Upload Image
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </Button>       
      </div>
    </React.Fragment>
  )
}
