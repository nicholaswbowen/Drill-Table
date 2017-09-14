import React, {Component} from 'react'

const localStyle = {
    tableCell: {
        align: 'left',
        position: "relative",
        display: "inline-block",
        border: "1px solid gray",
        width: "125px",
        height: "80px",
    },
    titleCell: {
        align: 'left',
        position: "relative",
        display: "inline-block",
        border: "1px solid gray",
        width: "500px",
        height: "80px",
    },
    cellContent: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
}

export class TableCell extends Component{
    render(){
        return(<div style={localStyle.tableCell}>
            <div style={localStyle.cellContent}>{this.props.content}</div>  
        </div>)
    }
}
export class TitleCell extends Component{
    constructor(){
        super();
        this.state = {titleCellStyle: Object.assign({}, localStyle.tableCell)}
    }
    componentDidMount(){
        const titleBaseWidth = 500;
        let tempTitleStyle = Object.assign({}, this.state.titleCellStyle)
        let depthWidth = titleBaseWidth - (titleBaseWidth * (.05 * this.props.depth))
        let depthMargin = 500 - depthWidth;
        tempTitleStyle.width = `${depthWidth}px`
        tempTitleStyle.marginLeft = `${depthMargin}px`
        this.setState({titleCellStyle: tempTitleStyle})
    }
    render(){
        return(<div style={this.state.titleCellStyle}>
            <div style={localStyle.cellContent}>{this.props.content}
                {this.props.buttonHandler ? <div><button onClick={this.props.buttonHandler}>></button></div> : null}
            </div>
        </div>)
    }
}
