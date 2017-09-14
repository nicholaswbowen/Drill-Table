import React, {Component} from 'react'

const localStyle = {
    container: {
        align: 'left',
        position: "relative",
        display: "inline-block",
        border: "1px solid gray",
        width: "125px",
        height: "80px",
    },
    cellContent: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    button: {
        
    }
}

export class TableCell extends Component{
    render(){
        return(<div style={localStyle.container}>
            <div style={localStyle.cellContent}>{this.props.content}

            {this.props.buttonHandler ? 
            <div><button onClick={this.props.buttonHandler}>></button></div> : null}

            </div>
            
        </div>)
    }
}
