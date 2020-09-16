import React from 'react';
//external files
import TextField from '../../atomics/inputs/text_field';
import TextareaField from '../../atomics/inputs/textarea_field';
import Button from '../../atomics/inputs/button';


const ProductInfo = () => {
    return (
        <div>
            <h2>prodcuto info</h2>
            <hr />
            <TextField placeholder="prodcut name" />
            <TextareaField placeholder="description" />
            <h2>main image</h2>
            <div></div>
            <Button name="upload image"/>
            <h2>pricing</h2>
            <hr/>
            <TextField placeholder="$"/>
            <h2>preparation</h2>
            <TextField placeholder="pre time (mins)"/>
            <TextField placeholder="cooldown (mins)"/>
            <h2>product options</h2>
            <hr/>
            <ul></ul>

            
            <Button name="add option"/>
        </div>
    )
};

export default ProductInfo;