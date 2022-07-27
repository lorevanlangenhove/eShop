import React from 'react'
import Header from './Header'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div>
        <Header />
        <div className="home">
            <div className="home_container">
                <img src="https://www.filmquest.co/image/hero-middle/uploads/main-images/duke-humfrey-s-library_bodleian_david-iliff.jpg" alt="" className="home_image" />
                <div className="home_row">
                    <Product 
                    id="bookOne"
                    title="Harry Potter and the Pholosopher's Stone"
                    price={20}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81m1s4wIPML.jpg"  
                    />
                    <Product 
                     id="bookTwo"
                     title="Harry Potter and he Chamber of Secrets"
                     price={10}
                     rating={4}
                     image="https://media.s-bol.com/v9M197QEvWrL/nrPPvlY/520x840.jpg"/>
                </div>
                <div className="home_row">
                    <Product 
                     id="bookThree"
                     title="Harry Potter and the Prisoner of Azkaban"
                     price={15}
                     rating={3}
                     image="https://images-na.ssl-images-amazon.com/images/I/81EbEWM54ML.jpg"/>
                    <Product 
                     id="bookFour"
                     title="Harry Potter and the Goblet of Fire"
                     price={30}
                     rating={5}
                     image="https://dynamic.indigoimages.ca/v1/books/books/1408855682/1.jpg?quality=10&sale=0"
                    />
                    <Product
                     id="bookFive"
                     title="Harry Potter and the Order of the Phoenix"
                     price={30}
                     rating={5}
                     image="https://images-na.ssl-images-amazon.com/images/I/91paGQ+vARL.jpg" />
                </div>
                <div className="home_row">
                    <Product
                     id="bookSix"
                    title="Harry Potter and the Halfblood Prince"
                    price={30}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61sXBXmAWML.jpg" />
                    <Product
                     id="bookSeven"
                    title="Harry Potter and the Deathly Hallows"
                    price={30}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71sH3vxziLL.jpg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home