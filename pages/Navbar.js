import Link from 'next/link';

const Navbar = () => (
<nav className='navbar navbar-expand navbar-dark bg-dark mb-4'>
    <div className='container'>
        <a className='navbar-brand' href='/'>Categorias</a>
        <div className='collapse navbar-collapse'>
            <ul className=' navbar-nav ml-auto'>
                <li className="nav-item">
                      <Link href="/"><a className="nav-link">Inicio</a></Link>
                </li>
                <li className="nav-item">
                      <Link href="/Item"><a className="nav-link">Ver Categorias</a></Link>
                     
                </li>
                <li className="nav-item">
                   
                      <Link href="/AddItem"><a className="nav-link">Agregar Categorias</a></Link>
                </li>
                <li className="nav-item">
                   
                   <Link href="/DeleteItem"><a className="nav-link">Eliminar Categorias</a></Link>
             </li>
             <li className="nav-item">
                   
                   <Link href="/EditItem"><a className="nav-link">Editar Categorias</a></Link>
             </li>
            </ul>
        </div>
    </div>
</nav>
)

export default Navbar;