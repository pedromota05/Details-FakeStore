import Image from 'next/image'

export const Cabecalho = () => {
    var logo=require('../components/img/logo.png');
    var imagetop=require('../components/img/intro.svg');

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" aria-label="Offcanvas navbar large" style={{background: '#802c6e'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <Image src={logo} width={50} height={46} alt="Logo fake store api" priority/> 
                     </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-white" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label" style={{background: '#802c6e'}}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                                <Image src={logo} width={50} height={46} alt="Logo fake store api" priority/> 
                                {" "}
                                Fake Store
                            </h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="https://fakestoreapi.com/docs" target="_blank" rel="noopener noreferrer">Docs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="https://github.com/keikaavousi/fake-store-api" target="_blank" rel="noopener noreferrer">Github</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Buy me a coffee
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="https://donate.keikaavousi.com/" target="_blank" rel="noopener noreferrer">Donate</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#!">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white i-cart-delete" href="#!">
                                        <span><i className="fas fa-shopping-cart" style={{fontSize: '1rem', marginRight: '8px', color: '#FFF'}}></i></span>
                                        <span className="position-absolute top-0 start-200 badge rounded-pill badge-notification bg-danger" style={{marginTop: '15px', marginLeft: '-15px'}}>1</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
        </>
    )
}