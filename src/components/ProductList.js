import '../App.css';

function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div className='  flex items-center justify-center w-[20%]'>
                            <div className='product-item m-0 p-2 border-white border-double border-[2px] '>
                                <img src={productItem.url} width="100%" 
                                className='hover:w-[70%] hover:h-[70%] w-[50%] h-[20%] mx-auto'/>
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList