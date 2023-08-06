export default function HeaderCompnent(props){
    return(
    
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{color:'brown'}}><h1>NIMISH SRIVASTAVA</h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Introduction</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/nimish123453">Github</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/nimish-srivastava-98561722a/">Linkedin</a>
              </li>
            </ul>
            <span class="navbar-text" style={{color:'green'}}>
              <h2>IMS ENGINEERING COLLEGE</h2>
            </span>
            <br></br>
            <br/>
            <br></br>
            <br/>
            
          </div>
        </div>
      </nav>
    
    )
}