import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class RoutesFile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            routes: []
        }
    }
    componentDidMount(){
        this.setState({routes: ["/abt/1","/abt/2","/abt/3","/abt/46666"]})
    }
    render(){
        return(
            <div> 
             {this.state.routes.map((route,index)=>{
                return <Link to={route} key={index}>{route} &nbsp;</Link>
            })}
            </div>
        );
    }
}
