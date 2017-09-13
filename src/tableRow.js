import React, {Component} from 'react'
import {tableStyle} from './tableStyle'

export class TableRow extends Component{
    constructor(){
        super();
        this.state = {isExpanded: false}
        this.renderOpenedRow = this.renderOpenedRow.bind(this)
    }

    render(){
        return(<tbody>
            <tr style={{backgroundColor: 'gray'}}>
                {this.state.isExpanded ? <td colSpan='100'>Totals for {this.props.rowData.name}</td> : null}
            </tr>
            <tr>
                <td style={tableStyle}>{this.props.rowData.name} <button onClick={this.toggleExpand.bind(this)}>></button></td>
                <TotalsRow rowData={this.props.rowData}/>
            </tr>
            {this.state.isExpanded ? this.renderOpenedRow() : null}
        </tbody> )
    }
    toggleExpand(){
        this.setState({isExpanded: !this.state.isExpanded})
    }
    renderOpenedRow(){
        return (<tr style={tableStyle}>
            <td >
                <table style={{width: '100%'}}>
                  <tbody>
                      {this.props.rowData.children.map((node) => {
                        return <tr key={node.name}><td style={tableStyle.colStyle}>{node.name}</td></tr>
                        })
                      }
                    
                  </tbody>      
                </table>
            </td>
            <td>
                {this.props.rowData.children.map((node) => {
                    return <table key={node.name}>
                            <tbody>
                                <tr>
                                { node.data.map((dataPoint, i) => 
                                {
                                    return <td key={`${node.name}-dataPoint-${i}`} style={tableStyle.colStyle}>{dataPoint}</td>
                                })} 
                                </tr>
                            </tbody>
                        </table>
                })}
            </td>
        </tr>)
    }
}

class TotalsRow extends Component {
    constructor(){
        super();
        this.state = {rowTotals: []}
    }
    componentDidMount(){
        let newRowTotals = this.calculateRowTotals()
        this.setState({rowTotals: newRowTotals})
    }
    calculateRowTotals(){
        let accumulator = [];
        this.props.rowData.children.forEach((child) => {
            child.data.forEach((dataPoint, index) => {
                if(accumulator[index] !== undefined){
                    accumulator[index] += dataPoint;
                }else{
                    accumulator[index] = dataPoint;
                }
            })
        })
        return accumulator;
    }
    render(){
    return (<td>
        <table>
          <tbody>
            <tr>
                {this.state.rowTotals.map((total,index) => {
                    return <td key={`row-total-${index}`}style={tableStyle.colStyle}>{total.toFixed(4)}</td>
                })}
            </tr>
          </tbody>      
        </table>
    </td>)
    }
}