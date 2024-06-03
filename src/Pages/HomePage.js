import React from 'react';
import logo from '../Assets/Screenshot 2024-06-03 122304.png'; // Importing the image
import '../App.css'
const HomePage = () => {
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt="Boom-a-Fruit" style={{ width: '5rem', padding: '1rem', cursor: 'pointer' }} />
                <h4 className='font' style={{ marginTop: '-4.5rem', marginLeft: '6.5rem', color: '#D03461', fontSize: '20px' }}>Boom-a-Fruit</h4>
            </div>
            <div>
                <form action="">
                    <div class="search-container" style={{ display: 'flex', alignContent: 'space-between', justifyContent: 'center', marginLeft: '40rem', marginTop: '-3rem' }}>
                        <input type="text" id="search" name="search" placeholder="Search" style={{ padding: '5px', marginRight: '2rem' }} />
                        <span class="material-symbols-outlined" style={{ marginLeft: '-65px' }}>search</span>
                        <div class="icon-container">
                            <span class="material-symbols-outlined">
                                contacts_product
                            </span>
                            <span class="material-symbols-outlined">
                                favorite
                            </span>
                            <span class="material-symbols-outlined">
                                shopping_cart
                            </span>
                            <span class="material-symbols-outlined">
                                menu
                            </span>
                        </div>

                    </div>
                </form>

                <div > <nav className='container'>
                    <div class="dropdown">
                        <p>Shops</p>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>


                    <ul style={{ display: 'flex', alignItems: 'center', listStyleType: 'none', gap: '30px', cursor: 'pointer', marginLeft: '5rem' }} >

                        <li className="nav-item">Fruits</li>
                        <li className="nav-item">Vegetables</li>
                        <li className="nav-item">Nuts</li>
                        <li className="nav-item">Gift Baskets</li>
                    </ul>
                </nav>
                </div>

            </div>
            <div className='container' style={{marginTop:'3rem'}}>
                <h3 className='font' style={{textAlign:'center',fontSize:'50px'}}>Fruits Emporium</h3>
                <h3 style={{textAlign:'center',color:'#785361',marginTop:'-3rem'}}>Discover the World's most extraordinary flavors </h3>
                <button className='btn' style={{textAlign:'center',position:'relative',left:'35rem'}} >Catalog</button>
            </div>

            
        </div>
    );
}

export default HomePage;
