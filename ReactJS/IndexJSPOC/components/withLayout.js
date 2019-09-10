
import Header from '../components/header';

const withLayout = Page =>{

    return ()=>(
        <div>
            <Header />
            <Page />
        </div>
    )
}

export default withLayout;

