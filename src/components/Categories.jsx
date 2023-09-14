import { Link } from "react-router-dom"

export default function Categories(props){
    return (
        <div className="four">
            <div className="smartphones">
                <Link to={props.link}>
                  <div className="one">
                    <h3>{props.heading}</h3>
                    <img src={props.img} className="two"/>
                  </div>
              </Link>
            </div>
        </div>
    )
}