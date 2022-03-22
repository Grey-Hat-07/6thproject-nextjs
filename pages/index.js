
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="images/banner 1.jpg"
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="text-1 wow fadeInLeftBig">Join our revolution</h1>
                    <p className="text-2 wow fadeInRightBig">Donate for stray dogs</p>
                    <button type="button" className="btn btn-outline-lights">
                      Donate<i
                        className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="images/banner 2.jpg"
                    alt="Second slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="text-1 wow fadeInLeftBig">
                      World className vets for your dog
                    </h1>
                    <p className="text-2 wow fadeInRightBig">
                      Consult with our vets for your dogs health and a beautiful
                      life
                    </p>
                    <button type="button" className="btn btn-outline-lights">
                      Talk Now<i
                        className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="images/banner 3.jpg"
                    alt="Third slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="text-1 wow fadeInLeftBig">Buy best</h1>
                    <p className="text-2 wow fadeInRightBig">
                      Buy medecines and other essentials for your dog
                    </p>
                    <button type="button" className="btn btn-outline-lights">
                      Buy Now<i
                        className="fa fa-long-arrow-right ml-1"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
