import React, {Component} from 'react'
import {TableRow} from './tableRow'
import {TableCell} from './tableCell'
export class DrillTable extends Component{
    constructor(){
        super();
        this.state = {tableData: {rows: [], rowHeaders:[]} }
    }
    componentDidMount(){
        this.setState({tableData: this.props.tableData})
    }
    render(){
        return(<div>
            <TableHeader headers={this.props.tableData.rowHeaders} />
            {this.state.tableData.rows.map((child) => {
                return <TableRow key={child.name} rowData={child} initialDepth={0}/>
            })}
            
        </div>)
    }
}

class TableHeader extends Component{
    render(){
        return(<div>
            {this.props.headers.map((header, index) => {
                return <TableCell key={`row-header-${header}`}content={header}/>
            })}
        </div>)
    }    
}