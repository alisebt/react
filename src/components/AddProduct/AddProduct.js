import { useState } from 'react';
import './AddProduct.css'

const AddProduct = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const submitForm = (e) => {
        e.preventDefault();

        onAdd({ title });

        setTitle('');
    }

    return (
        <div>
            <form className='add-product-form' onSubmit={submitForm}>
                <div className='form-control'>
                    <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <button type='submit' className='form-btn'>Add</button>
            </form>
        </div>
    )
}

export default AddProduct