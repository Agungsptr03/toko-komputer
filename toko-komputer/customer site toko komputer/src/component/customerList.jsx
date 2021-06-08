import React from 'react'

export default class CustomerList extends React.Component{
    render(){
        return(
            <div className="card col-sm-12 my-1">
                <div className="card-body row">
                    <div className="col-sm-3">
                        <img src={this.props.img} alt={this.props.name} className="rounded-circle img" width="150" height="150"/>
                    </div>
                    <div className="col-sm-7">
                        <h5 className="text-bold">Customer Name:{this.props.name}</h5>
                        <h6>Customer Phone:{this.props.phone}</h6>
                        <h6>Customer Address:{this.props.address}</h6>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-primary btn-block" onClick={this.props.onEdit}>Edit</button>
                        <button className="btn btn-danger btn-block" onClick={this.props.onDrop}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}