import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home_container">
                <img src="https://c4.wallpaperflare.com/wallpaper/229/822/421/fire-kirin-wallpaper-preview.jpg" alt="" className="home_image" />
                <div className="home_row">
                    <Product 
                    id="niffler"
                    title="Niffler"
                    price={30}
                    rating={5}
                    image="https://www.homefurniturelife.com/wp-content/uploads/2022/04/51KmGpgSZAL._AC_SL1009_.jpg"  
                    />
                    <Product 
                     id="hedwig"
                     title="Hedwig"
                     price={300}
                     rating={4}
                     image="https://cdn.europosters.eu/image/750/harry-potter-hedwig-i77619.jpg"/>
                </div>
                <div className="home_row">
                    <Product 
                     id="centaur"
                     title="Centaur"
                     price={3000}
                     rating={3}
                     image="https://www.homefurniturelife.com/wp-content/uploads/2022/04/51KmGpgSZAL._AC_SL1009_.jpg"/>
                    <Product 
                     id="niffler"
                     title="Niffler"
                     price={30}
                     rating={5}
                     image="https://www.homefurniturelife.com/wp-content/uploads/2022/04/51KmGpgSZAL._AC_SL1009_.jpg"
                    />
                    <Product
                     id="niffler"
                     title="Niffler"
                     price={30}
                     rating={5}
                     image="https://www.homefurniturelife.com/wp-content/uploads/2022/04/51KmGpgSZAL._AC_SL1009_.jpg" />
                </div>
                <div className="home_row">
                    <Product
                     id="niffler"
                    title="Niffler"
                    price={30}
                    rating={5}
                    image="https://www.homefurniturelife.com/wp-content/uploads/2022/04/51KmGpgSZAL._AC_SL1009_.jpg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home