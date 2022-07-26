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
                    <Product />
                    <Product />
                </div>
                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home_row">
                    <Product />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home