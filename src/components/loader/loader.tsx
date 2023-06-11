import './loader.css';

function MyLoader(){
    return(
        <div className="loader">
          <div className="cube">
            <div className="side front"></div>
            <div className="side back"></div>
            <div className="side right"></div>
            <div className="side left"></div>
            <div className="side top"></div>
            <div className="side bottom"></div>
          </div>
        </div>
    );
}

export default MyLoader;