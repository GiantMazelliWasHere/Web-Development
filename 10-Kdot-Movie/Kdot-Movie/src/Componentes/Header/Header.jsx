import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-around bg-black text-white p-5 mb-4">
            <span>Olá, visitante</span>
            <h2>Bem-Vindo ao Kdot Movie</h2>
            <Navbar/>
        </header>
     );
}

export default Header;