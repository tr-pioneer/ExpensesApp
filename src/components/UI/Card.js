import './Card.css'

// using a standard function
function Card(props) {

    const classes = 'card ' + props.className;    
    return <div className={classes}>{props.children}</div>;
}

export default Card;