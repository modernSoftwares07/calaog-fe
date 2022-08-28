import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import './ProductList.css'
import axios from 'axios'
import ProductRow from '../ProductRow/ProductRow'
const ProductList = () => {
    const [productList,setProductList] = useState([])
    const [productRowList,setProductRowList] = useState([])
    const [selectedCategory,setSelectedCategory] = useState('');
    const loadProducts = async() => {
        try{
            console.log('loading data')
            let response 
            if(!selectedCategory){
                response = await axios.get('https://item-catalog-012.herokuapp.com/item-service/items');
            }
            else{
                response = await axios.get(`https://item-catalog-012.herokuapp.com/item-service/items/${selectedCategory}`)
            }
            await setProductList(response.data);
        }
            catch(e){
                console.log(e)
            } 
         }
         
    useEffect(() => {
        loadProducts();
    },[selectedCategory])

     useEffect(() => {
        const productRows = [];
        let count = 0;
        while(count+4 <= productList.length){
            productRows.push(productList.slice(count,count+4))
            count += 4;
        }
        setProductRowList(productRows)
     },[productList])

    const handleCategorySelection = (catagory) => {
        setSelectedCategory(catagory)
    } 
    
    const productListDisplay = productRowList.map(data => {
        return( <ProductRow
        key = {productList.indexOf(data)}
        element = {data}
        />)
    })
    return(
        <div>
             <div className="mast-head">
                <h1 className='header'>Product Catalog</h1>
                <Navbar catagory = {handleCategorySelection}/>
             </div>
             <div className="item-details">
                    {productListDisplay}
             </div>
        </div>
    )
}

export default ProductList