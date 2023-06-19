import "./demo.css";

interface DemoProps{
    title: string;
    demo: string;
}

function MyDemo(props: DemoProps) {
  return (
    <div className="demo">
      <div className="d-title">
      <h2>{props.title}</h2>
      </div>
     <div className="d-vid">
     <video controls>
        <source src={props.demo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     </div>
    </div>
  );
}

export default MyDemo;
