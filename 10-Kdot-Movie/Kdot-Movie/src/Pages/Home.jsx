import data from '../../dados/artigos.json'

export default function Home() {
    return ( 
        <>
            <input type="text" name="buscaFilme" id="buscaFilme" placeholder="DIGITE SUA BUSCA AQUI"/>
            <div id="listaFilmes" className='grid grid-cols-3 gap-3'>
                {
                    data.map(
                        (post, index) => (
                            <div id='card' key={index}>
                                <h1>{post.title}</h1>
                                <img src={post.image}/>
                                <div id='tags'>
                                    {post.tags.map(tags => (
                                        <span key={tags}>{tags}</span>
                                    ))}
                                </div>
                                <div id='texto'>
                                {post.text.map((texto, index) => (
                                        <p key={index}>{texto}</p>
                                    ))}
                                </div>
                            </div>

                    ))
                }
            </div>
        </>
     );
}

{/* <div id="listaFilmes">
                <div>
                    <h1>Titulo do filme</h1>
                    <img src=""/>
                    <div id="card">
                        <span></span>
                        <span></span>
                    </div>
                    <div id="textos">
                        <p></p>
                        <p></p>
                    </div>
                </div>

            </div> */}