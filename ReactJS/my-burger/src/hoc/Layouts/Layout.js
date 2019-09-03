import React,{Component} from 'react';
import Aux from '../Aux/Aux';
import Classes from './Layout.css'
import Toolbar from '../../components/Navigations/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigations/Sidedrawer/Sidedrawer';

class Layout extends Component{
    state={
        openSideDrawer:false
    }

    closedSidedrawerHandler =()=>{
        this.setState({openSideDrawer:false})
    }
    toggleHandler=()=>{
       this.setState((preState)=>{
           return(
               {openSideDrawer:!preState.openSideDrawer}
           )
       })
    }
    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.toggleHandler} />
                <Sidedrawer  closedSidedrawer={this.closedSidedrawerHandler} show={this.state.openSideDrawer} />
                <main className={Classes.Content}>
                {this.props.children}
                </main>
            </Aux>
        )
    }
}
 
export default Layout;


