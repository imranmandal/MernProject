import React from "react";
import {Modal,ModalHeader,ModalFooter,ModalBody} from "reactstrap";

function ModalCom (props)
{
    return <Modal isOpen={props.isOpen} 
                  toggle={props.toggle}
                  className={props.className}>
            <ModalHeader toggle={props.toggle}>
             
               {props.Header}
                  
            </ModalHeader>
            <ModalBody>
                {props.Body}
            </ModalBody>
            <ModalFooter>
              {props.Footer}
              
            </ModalFooter>

    </Modal>

}
export default ModalCom;


