import {Link} from 'react-router-dom';

export default function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="filmes">Filmes</Link></li>
                <li><Link to="sobre">Sobre</Link></li>
                <li><Link to="contato">Contato</Link></li>
            </ul>
        </nav>
     );
}