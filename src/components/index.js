import './boton.css';

function Button({text, onClick}){
    return(
        <button onClick={onClick} className='boton'>{text}</button>
    )
}

export default Button;