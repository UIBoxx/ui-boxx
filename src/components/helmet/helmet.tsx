import { Helmet } from "react-helmet";

interface HelmetProps{
    title: string;
    des: string;
    keywords: string;
}

function MyHelmet(props: HelmetProps){
    return(
        <Helmet>
        <title>{props.title} | UIBOXX</title>
        <meta
          name="description"
          content={props.des}
        />
        <meta
          name="keywords"
          content={props.keywords+ ', uiboxx'}
        />
      </Helmet>
    );
}

export default MyHelmet;