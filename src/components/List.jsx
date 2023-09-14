import Star from './Star';

export default function List(props){
    return(
      <div className="booklist">
        <div className='card'>
            <div className="image--holder">
                <img src={props.image} />
            </div>
            <p className='title'>{props.title}</p>
            <div className='details'>
            <Star stars={props.rating} />
            <span>{props.rating} •</span>
            <span>{props.numbers}</span>
            </div>
            <div className='price'>
                {props.price}
            </div>
            <div>
                <button className='add--button'>Add to Cart</button>
            </div>
        </div>
      </div>
    )
  }
  
 