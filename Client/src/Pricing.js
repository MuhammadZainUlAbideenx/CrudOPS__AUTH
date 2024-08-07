const Pricing =()=>{
    return(<>
    <>
 
  <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle mb-5">
    
   
  </div>
  
  <div className="container py-3">
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        
          
      </div>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-1 fw-normal text-bold text-white">Pricing</h1>
        
      </div>
    </header>
    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center text-body-light">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm text-body-white">
            <div className="card-header py-3" style={{backgroundColor: "#FF6F02"}}>
              <h4 className="my-0 fw-normal text-white" >Free</h4>
            </div>
            <div className="card-body bg-color-#FF6F02">
              <h1 className="card-title pricing-card-title">
                $0<small className=" fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg btn-outline-dark"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3" style={{backgroundColor: "#FF6F02"}}>
              <h4 className="my-0 fw-normal text-white">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $15<small className="text-body-secondary fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-dark">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 border-primary" style={{backgroundColor: "#FF6F02"}}>
              <h4 className="my-0 fw-normal text-white">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $29<small className="text-body-secondary fw-light">/mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-dark">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</>

    </>);
}
export default Pricing;