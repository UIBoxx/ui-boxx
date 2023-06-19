import './desc.css';

interface DescProps{
    title: string;
    desc: string; 
    flexDirection:  FlexDirection | undefined ;
}

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

function Desc(props: DescProps){
    return(
        <div className="desc-body" style={{flexDirection : props.flexDirection}}>
            <div className="desc-content">
                <span>{props.title}</span>
                <span>{props.desc}</span>
            </div>
        </div>
    );
}

export default Desc;