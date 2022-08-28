import React,{useState} from 'react'
import './Navbar.css'

const Navbar = (props) => {
    const [catagory,setCatagory] = useState('')

    const categoryList = ['Health care','Kitchen','Stationaries','Home decor']
    const categories = categoryList.map(data =>
        {return( <i key={Array.from(categoryList).indexOf(data)} 
                    className="w3-bar-item w3-button"> <input type="radio"
                    checked={catagory===data}
                    onChange={(event) => handleSelection(event.target.value)}
                    value ={data}
                     name = {data}
                    />{data}</i>)})

    const handleSelection = (value) => {
        setCatagory(value)
        props.catagory(value)
    }
    return(
        <div className='w3-bar w3-blue'>
            <span className='navbar-fonts'>
            <input type="text" className="w3-bar-item w3-input" placeholder="Enter search keyword"
                />
            <i className="w3-bar-item fa fa-search"></i>
            <button className="w3-bar-item w3-button w3-red">Search</button> 
            <div className="w3-dropdown-hover">
                <button className="w3-button">Select category <i className="arrow down"></i></button>
                <div className=" w3-dropdown-content drop-downContent w3-bar-block w3-card-4"
                    >
                    {categories}
                </div>
            </div>
            </span>
        </div>
    )

}

export default Navbar