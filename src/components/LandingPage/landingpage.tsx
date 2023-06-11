import './landingpage.css';

function LandingPage(){
    return (
        <div className="l-body">
            <div className="l-intro">
                <div className="l-intro-left">
                    <h2>Welcome to<span> UIBOXX!</span></h2>
                    <p>Discover the ultimate destination for customizable UI components and modern UI tools. We provide a wide range of cutting-edge design resources, including neumorphic and glassmorphic styles. Create visually striking and user-friendly interfaces with our collection of UI components. Our platform empowers designers, developers, and business owners, offering the tools and resources needed to bring creative visions to life. Explore our offerings and unlock a world of possibilities to elevate your digital projects to new heights.</p>
                    <a href="/ui-components"><button>Explore Now!</button></a>
                </div>
                <div className="l-intro-right">
                    <span>U</span><span>I</span>
                    <span></span>
                    <span className="rocket">🚀</span>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;