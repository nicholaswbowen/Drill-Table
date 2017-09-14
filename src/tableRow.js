import React, {Component} from 'react'
import {TableCell, TitleCell} from './tableCell'
import {TotalsRow} from './totalsRow'
export class TableRow extends Component{
    constructor(){
        super();
        this.state = {isExpanded: false};
        this.renderChildren = this.renderChildren.bind(this)
        this.toggleExpand = this.toggleExpand.bind(this)
        this.addExpandHandler = this.addExpandHandler.bind(this)
        this.hasNoChildren = this.hasNoChildren.bind(this)
    }
    render(){
        return(<div>
            <TitleCell content={this.props.rowData.name} buttonHandler={this.addExpandHandler()} depth={this.props.depth || 0}/>
            <TotalsRow rowData={this.props.rowData}/>
            {this.state.isExpanded ? this.renderChildren(this.props.rowData.children, this.props.depth || 0) : null}
        </div>)
    }
    createDepth(){
        let tableSpace = [];
        if(this.props.depth){
            for(let i = 0; i < this.props.depth; i++){
                 tableSpace.push(<TableCell key={`${this.props.rowData.name}-space-${i}`}/>)
            }
        }
        return tableSpace
    }
    addExpandHandler(){
        if (this.hasNoChildren()){
            return null;
        }
        return this.toggleExpand
    }
    hasNoChildren(){
        return this.props.rowData.children.length === 0;
    }
    toggleExpand(){
        this.setState({isExpanded: !this.state.isExpanded})
    }
    renderChildren(children, depth){
        console.log(depth)
        return children.map((child) => {
            return <TableRow rowData={child} key={child.name} depth={depth+1} />;
        })
    }
}
