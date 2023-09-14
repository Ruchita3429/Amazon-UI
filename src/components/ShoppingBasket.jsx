const ShoppingBasket = () => {
    return(
      <div className="shoppingBasket">
        <h2>Your Shopping Basket</h2>
        <hr/>
        <ul className='list'>
          <li>
            <div className='imageHolder'>
              <img src="" alt="" />
            </div>
            <div className='itemDeatils'>
              <div>Sint cupidatat dolor nulla velit ipsum mollit minim ullamco ullamco voluptate elit.</div>
              <p><strong>Rs. 0:00</strong></p>
              <div>Rating</div>
              <button>Remove from Cart</button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
  
  export default ShoppingBasket;