import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
//import axios from 'axios';


const withErrorHandler = (WrappedComponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        constructor(props){
            super(props);
            axios.interceptors.request.use(req=>{
                this.setState({error: null});
                return req;
            });

            axios.interceptors.response.use(null,error=>{
                console.log('ERRRRRRR',error);
                this.setState({error:error});
            });
        }
        errorHandler = ()=>{
            this.setState({error:null});
        }
        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorHandler}>
                        {this.state.error ? this.state.error.message : ''}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }

}
export default withErrorHandler;