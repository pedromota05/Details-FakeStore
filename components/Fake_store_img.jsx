import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export const Fake_store_img = () => {
    var imagetop=require('../components/img/intro.svg');
    return(
        <>
        <section className="d-flex flex-column flex-md-row align-items-center justify-content-center featurette margins-cabecalho">
            <div className="rounded col-md-4 order-2 order-md-1 text-center text-md-start display-mobile">
                <h1 className="lh-1">Fake Store API</h1>
                <p className="lead" style={{ fontSize: '1rem' }}>
                    Fake store REST API for your e-commerce or shopping website prototype.
                </p>
                <a
                    className="btn btn-lg button-github mb-2"
                    href="https://github.com/keikaavousi/fake-store-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    style={{ fontSize: "1.1rem", background: "#802c6e", color: "#f5f5f5", width: "200px", height: "50px", 
                        display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                    View on GitHub <i className="fab fa-github" style={{ marginLeft: "10px" }}></i>
                </a>
                <a
                    className="btn btn-lg btn-book"
                    href="https://fakestoreapi.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    style={{ fontSize: "1.1rem", background: "#f7aa35", color: "#f5f5f5", width: "200px", height: "50px",
                        display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                    Read Docs <i className="fas fa-book" style={{ marginLeft: "45px" }}></i>
                </a>
            </div>
            {/* Imagem */}
            <div className="col-md-5 order-1 order-md-2 text-center">
                <Image
                src={imagetop}
                width={374}
                height={289}
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image mx-auto"
                alt="description of image"
                priority={true}
                />
            </div>
            </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
        </>
    )
}