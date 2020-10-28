import React from 'react';
import img1 from '../assets/imagenes/not1.jpg'
import '../assets/scss/noticias.scss'


const Noticias = (props) => {
    return (
          <div className="col-md-4">
            <div className="card m-3">
                <div className="row">
                    <div className="col-12">
                        <img src={img1} className="img-fluid img1" alt="" />
                    </div> 
                    <div className="col-12">
                        <div className="card-body">
                            <h5 className="card-title">
                                Ejercito Nacional en el cumplimiento de su deber
                                </h5>
                            <p className="card-text">
                                Lorem, ipsum dolor sit amet consectetur. temporibus, quasi, cupiditate eum laboriosam amet accusamus reiciendis, sed tempora culpa maiores? Obcaecati, magnam neque.
                                </p>
                            <div className="autor">
                                <span className="fecha">Hace 12 Minutos</span>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-whatsapp" ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}


export default Noticias

