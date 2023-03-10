import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export const Fake_store_img = () => {
    var imagetop=require('../components/img/intro.svg');
    return(
        <div lang="pt-br">
        <Head>
            <title>Create Next App</title>
            <meta charSet="utf-8"></meta>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className='row featurette' style={{marginTop: '100px'}}>
            <div className="p-5 rounded col-md-4 order-md-8">
                <h1 className='lh-1'><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Fake Store API</font></font></h1>
                <p className="lead"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Fake store rest API for your e-commerce or shopping website prototype.</font></font></p>
                <a className="btn btn-lg" href="https://github.com/keikaavousi/fake-store-api" target="_blank" rel="noopener noreferrer" role="button" style={{background: "#802c6e", color: "#f5f5f5", marginRight: '20px'}}><font><font style={{verticalAlign: 'inherit', fontSize: '18px'}}>View on GitHub <i className="fab fa-github" style={{marginLeft: '10px'}}></i></font></font></a>
                <a className="btn btn-lg btn-book" href="https://fakestoreapi.com/docs" target="_blank" rel="noopener noreferrer" role="button" style={{background: "#f7aa35", color: "#f5f5f5", width: '190px', height: '50px'}}><font><font style={{verticalAlign: 'inherit', fontSize: '18px'}}>Read Docs <i className="fas fa-book" style={{marginLeft: '35px'}}></i></font></font></a>
            </div>
            <div className="col-md-5 order-md-1">
                <Image src={imagetop} width={374} height={289} className="bd-placeholder-img bd-placeholder-img-lg featurette-image mx-auto" alt="description of image" priority={true}/>
            </div>
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
        </div>
    )
}