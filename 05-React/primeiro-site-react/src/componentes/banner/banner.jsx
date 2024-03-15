import './banner.css'

function Banner(props){
    return(
        <header>
            <h1 className="titulo-banner">{props.textoBanner}</h1>
            <p></p>
        </header>
    )
}

export default Banner