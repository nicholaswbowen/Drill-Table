import React, {Component} from 'react'
import {TableCell} from './tableCell'

const localStyle = {
    container: {
        position: "relative",
        display: "inline-block",
    },
    cellContent: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }

}
export class TotalsRow extends Component {
    constructor(){
        super();
        this.state = {rowTotals: []}
    }
    componentDidMount(){
        let newRowTotals;
        if (this.hasNoChildren()){
            newRowTotals = this.props.rowData.data
        }else{
            newRowTotals = this.calculateRowTotals(this.props.rowData)
        }
        
        this.setState({rowTotals: newRowTotals})
    }
    hasNoChildren(){
        return this.props.rowData.children.length === 0;
    }
    calculateRowTotals(data){
        let accumulator = [];
        data.children.forEach((child) => {
            child.data.forEach((dataPoint, index) => {
                if(accumulator[index] !== undefined){
                    accumulator[index] += dataPoint;
                }else{
                    accumulator[index] = dataPoint;
                }
            })
            if (child.children.length > 0){
                this.calculateRowTotals(child).forEach((dataPoint, index) => {
                    if(accumulator[index] !== undefined){
                        accumulator[index] += dataPoint;
                    }else{
                        accumulator[index] = dataPoint;
                    }
                })
            }
        })
        return accumulator;
    }
    render(){
    return (<div style={localStyle.container}>
        {this.state.rowTotals.map((total, index) => {
            return <TableCell key={`${this.props.rowData.name}-total-${index}`} content={total.toFixed(4)}/>
        })}
    </div>)
    }
}