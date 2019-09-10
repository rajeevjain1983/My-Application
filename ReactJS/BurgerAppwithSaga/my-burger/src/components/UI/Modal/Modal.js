import React, {Component} from 'react';
import Classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import BackDrop from '../../UI/Backdrop/Backdrop';

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
       return nextProps.show!==this.props.show || nextProps.children!==this.props.children;
    }
        render(){
            console.log('model Render');
            return(
                <Aux>
                <BackDrop clicked={this.props.modalClosed} show={this.props.show}></BackDrop>
                <div className={Classes.Modal} 
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
        </Aux>
        )
        }
}
export default Modal;