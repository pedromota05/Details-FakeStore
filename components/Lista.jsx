import Image from 'next/image'
import Link from 'next/link';

export const Lista = ({teste}) => {
    return(
    <div lang="pt-br">
        <section className="cards-edition">
        <div className="container-teste"> 
            <div className="container-teste mt-5">
            <div className="row">
            <div className="col-md-4">
                <section className="filters-font" style={{letterSpacing: '1px'}}>
                    <section id="filters" data-auto-filter="true">
                        <h5>Filters</h5>
                    <section className="col-12" id="fs_price_body">
                        <div>
                            <span className="heading">
                                By Price
                            </span>
                            <div className="row">
                                <div className="col-4">
                                    <button className="btn" type="button"><i className="fas fa-dollar-sign"></i></button>
                                </div>
                                <div className="col-4 active">
                                    <button className="btn" type="button"><i className="fas fa-dollar-sign"></i><i className="fas fa-dollar-sign"></i></button>
                                </div>
                                <div className="col-4">
                                    <button className="btn" type="button"><i className="fas fa-dollar-sign"></i><i className="fas fa-dollar-sign"></i><i className="fas fa-dollar-sign"></i></button>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="line1"></div>
                            <div>
                                <ul>
                                    <li>$5</li>
                                    <li>$1000</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-4" data-filter="condition">
                    <h6 className="font-weight-bold mb-3 text-codition">Condition</h6>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="new" id="condition-checkbox"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="condition-checkbox">
                        New
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="used" id="condition-checkbox2"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="condition-checkbox2">
                        Used
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="collectible" id="condition-checkbox3"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="condition-checkbox3">
                        Collectible
                        </label>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="renewed" id="condition-checkbox4"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="condition-checkbox4">
                        Renewed
                        </label>
                    </div>
                    </section>

                    <section className="mb-4">
                    <h6 className="font-weight-bold mb-3 text-avg">Avg. Customer Review</h6>
                    <ul className="rating" data-toggle="rating" id="filter-rating" tabIndex="0">
                        <li>
                        <i className="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="1"></i>
                        </li>
                        <li>
                        <i className="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="2"></i>
                        </li>
                        <li>
                        <i className="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="3"></i>
                        </li>
                        <li>
                        <i className="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="4"></i>
                        </li>
                        <li>
                        <i className="far fa-star fa-sm text-primary" title="" data-toggle="tooltip" data-original-title="5"></i>
                        </li>
                    </ul>
                    </section>

                    <section className="mb-4">
                    <h6 className="font-weight-bold mb-3 text-price">Price</h6>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="price-radio">
                        Under $25
                        </label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio2"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="price-radio2">
                        $25 to $50
                        </label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio3"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="price-radio3">
                        $50 to $100
                        </label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio4"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="price-radio4">
                        $100 to $200
                        </label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="price-radio5"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="price-radio5">
                        $200 &amp; above
                        </label>
                    </div>
                    </section>
                
                    <section className="mb-4" data-filter="size">
                    <h6 className="font-weight-bold mb-3 text-size">Size</h6>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="34" id="price-checkbox"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="price-checkbox">
                        34
                        </label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="36" id="price-checkbox2"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="price-checkbox2">
                        36
                        </label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="38" id="price-checkbox3"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="price-checkbox3">
                        38
                        </label>
                    </div>

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="40" id="price-checkbox4"/>
                        <label className="form-check-label text-uppercase small text-muted" htmlFor="price-checkbox4">
                        40
                        </label>
                    </div>
                    </section>
                    <section className="mb-4" data-filter="color">
                    <h6 className="font-weight-bold mb-3 text-color">Color</h6>

                    <div className="form-check form-check-inline m-0 p-0 pr-3">
                        <input className="btn-check" type="radio" name="colorRadio" id="colorRadio1" value="white"/>
                        <label className="btn bg-success btn-rounded p-3" htmlFor="colorRadio1" style={{borderRadius: '50%'}}></label>
                    </div>

                    <div className="form-check form-check-inline m-0 p-0 pr-3">
                        <input className="btn-check" type="radio" name="colorRadio" id="colorRadio2" value="grey"/>
                        <label className="btn btn-rounded p-3" htmlFor="colorRadio2" style={{backgroundColor: '#bdbdbd', borderRadius: '50%', marginLeft: '8px'}}></label>
                    </div>

                    <div className="form-check form-check-inline m-0 p-0 pr-3">
                        <input className="btn-check" type="radio" name="colorRadio" id="colorRadio3" value="black"/>
                        <label className="btn bg-dark text-white btn-rounded p-3" htmlFor="colorRadio3" style={{borderRadius: '50%', marginLeft: '8px'}}></label>
                    </div>

                    <div className="form-check form-check-inline m-0 p-0 pr-3">
                        <input className="btn-check" type="radio" name="colorRadio" id="colorRadio5" value="blue"/>
                        <label className="btn bg-primary btn-rounded p-3" htmlFor="colorRadio5" style={{borderRadius: '50%', marginLeft: '8px'}}></label>
                    </div>

                    <div className="form-check form-check-inline mt-3 mr-0 p-0 pr-3">
                        <input className="btn-check" type="radio" name="colorRadio" id="colorRadio9" value="red"/>
                        <label className="btn bg-danger btn-rounded p-3" htmlFor="colorRadio9" style={{borderRadius: '50%', marginLeft: '8px'}}></label>
                    </div>

                    <div className="form-check form-check-inline mt-3 mr-0 p-0 pr-3">
                        <input className="btn-check" type="radio" name="colorRadio" id="colorRadio10" value="orange"/>
                        <label className="btn bg-warning btn-rounded p-3" htmlFor="colorRadio10" style={{borderRadius: '50%', marginLeft: '-8px'}}></label>
                    </div>
                    </section>
                </section>
                </section>
            </div>

            <div className="col-md-8">
                <div className="row d-flex justify-content-end">
                <div className="col-md-6 my-auto py-3">
                    <label className="custom-select" htmlFor="styledSelect1">
                    <select id="styledSelect1" name="options">
                        <option value="">
                        Melhor Classificação
                        </option>
                        <option value="1">
                        Preço mais baixo primeiro
                        </option>
                        <option value="2">
                        Preço mais alto primeiro
                        </option>
                        <option value="3">
                        Ordenar A - Z
                        </option>
                    </select>
                    </label>
                </div>
            </div>

                <div className="container mt-2 mb-5">
                    <div className="row">
                        <div className="col-md-20">
                        {teste.map((user) => (
                            <div key={user.id} className="row p-2 bg-white border rounded card-principal" style={{marginTop: '30px'}}>  
                            <div className="col-md-2 mt-1 image-center"><Image className="img-fluid img-responsive rounded" src={user.image} width={125} height={120} alt="Imagens de produtos fake api" priority/></div>
                                <div className="col-md-7 mt-1">
                                <h5 className="font-weight-bold" style={{marginBottom: '15px', paddingTop: '15px'}}>{user.title}</h5>
                                    <div className="d-flex flex-row">
                                    <div className="ratings mr-2"><div className="stars-outer"><div className="stars-inner"></div></div></div><span style={{marginLeft: '5px'}}>{user.rating.rate}</span>
                                    </div>
                                    <div className="mt-1 mb-1 spec-1" style={{paddingTop: '5px'}}><span>{user.category}</span></div>
                                    <p className="text-justify text-truncate para mb-0" style={{color: '#000'}}>{user.description}<br /><br /></p>
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    <h4 className="mr-1">${user.price}</h4><span className="strike-text">$249.99</span>
                                </div>
                                <h6 className="text-success">Free shipping <i className="fas fa-plane-departure" style={{marginLeft: '5px'}}></i></h6>
                                <div className="d-flex flex-column mt-4"><Link className="btn btn-primary btn-sm btn-details d-flex align-items-center justify-content-center" type="button" href='/details/[id]'as={`/details/${user.id}`} rel="stylesheet preload">Details</Link>
                                <button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to cart</button></div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
    </div>
    )
}