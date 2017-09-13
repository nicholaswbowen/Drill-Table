import React, {Component} from 'react'
import {tableStyle} from './tableStyle'
import {TableRow} from './tableRow'

export class DrillTable extends Component{
    constructor(){
        super();
        this.state = {tableData: {rows: [], rowHeaders:[]} }
    }
    componentDidMount(){
        this.setState({tableData: this.props.tableData})
    }
    render(){
        return(<table style={tableStyle}>
            
            <TableHeader rowHeaders={this.state.tableData.rowHeaders}/>
        
            {this.state.tableData.rows.map((row) => {
                return <TableRow key={row.name} rowData={row} />
            })}    
        </table>)
    }
}

class TableHeader extends Component{
    render(){
        return(<thead>
            <tr></tr>
            <tr>
                <th style={tableStyle.headerStyle}>{this.props.rowHeaders[0]}</th>
                <td>
                    <table>
                        <tbody>
                            <tr>
                            {this.props.rowHeaders.map((header, i) => {
                                return i !== 0 ? <th style={tableStyle.colStyle} key={`header-${i}`}>{header}</th> : null
                            })}
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </thead>)
    }    
}