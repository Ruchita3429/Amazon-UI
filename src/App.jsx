import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Signin from "./components/Signin"
import Login from "./components/Login"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import data from "./info/data"
import { amazon } from "./info/products"
import Header from "./components/Header"
import List from "./components/List"
import CheckoutAd from "./components/CheckoutAd"
import ShoppingBasket from "./components/ShoppingBasket"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"

export default function App(){
    
    const categorie = data.map(item => {
        return(
                 <Categories
                    link={item.link}
                    heading={item.heading}
                    img={item.image}
                />
        )
    })

    const smartphonelists = amazon.filter (
        item => item.type === "phones").map(item => {
        return(
                 <List
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    numbers={item.numbers}
                />
        )
    })

    const electroniclists = amazon.filter (
        item => item.type === "electronics").map(item => {
        return(
                 <List
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    numbers={item.numbers}
                />
        )
    })

    const booklists = amazon.filter (
        item => item.type === "books").map(item => {
        return(
                 <List
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    numbers={item.numbers}
                />
        )
    })
        
     return (
      <Router>
          <Routes>
              <Route exact path="/" element={    
                <React.Fragment>       
                <Navbar />
                <Banner />
                <section className="types">
                    {categorie}
                </section>
                <Footer />
                </React.Fragment>      
              }/>

              <Route exact path="/signin" element={    
                <React.Fragment>       
                <Navbar />
                <Signin />
                <Footer />
                </React.Fragment>      
              }/>

            <Route exact path="/login" element={    
                <React.Fragment>       
                <Navbar />
                <Login />
                <Footer />
                </React.Fragment>      
              }/>

                <Route exact path="/smartphones" element={
                    <React.Fragment>      
                        <Navbar />
                        <Header/>
                        <section className="listings">
                            {smartphonelists}
                        </section>
                        <Footer />
                    </React.Fragment>
                }/>
                <Route exact path="/electronics" element={
                    <React.Fragment>      
                        <Navbar />
                        <Header/>
                        <section className="listings">
                            {electroniclists}
                        </section>
                        <Footer />
                    </React.Fragment>
                }/>
                <Route exact path="/books" element={
                    <React.Fragment>      
                        <Navbar />
                        <Header/>
                        <section className="listings">
                            {booklists}
                        </section>
                        <Footer />
                    </React.Fragment>
                }/>
                <Route exact path="/checkout" element={
                    <React.Fragment>      
                        <Navbar />
                        <CheckoutAd/>
                        <ShoppingBasket/>
                        <Footer />
                    </React.Fragment>
                }/>
                </Routes>
            </Router>
            )
}