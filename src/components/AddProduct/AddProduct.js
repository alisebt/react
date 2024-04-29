import './AddProduct.css'

const AddProduct = () => {
    return (
        <div>
            <form className='add-product-form'>
                <div className='form-control'>
                    <input type='text' placeholder='Title'></input>
                </div>
                <button type='submit' className='form-btn'>Add</button>
            </form>
        </div>
    )
}

export default AddProduct