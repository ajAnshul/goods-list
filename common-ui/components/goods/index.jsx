import React from 'react';
import GoodsList from './goods-list.jsx';
require("../../css/styles.css");

export default class PersonalInfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[],
      sportsGoods:[],
      electronics:[]
    }
  }
  filterData(data){
  var arr1 = [];
  var arr2 = [];
  for(var i = 0;i<data.length;i++){
    if(data[i].category == "Sporting Goods"){
      arr1.push(data[i]);
    } else if(data[i].category == "Electronics"){
      arr2.push(data[i]);
    }
  }
  this.setState({sportsGoods:arr1,electronics:arr2});
  }
  componentWillMount(){
  var data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]
  this.setState({data:data});
  this.filterData(data);
}
handleChange(event){
  var status = event.target.checked;
  var data = this.state.data;
  var newData = [];
  if(status){
    for(var i=0;i<data.length;i++){
      if(data[i].stocked == true)
        newData.push(data[i]);
    }
    this.filterData(newData);
  } else{
    this.filterData(data);
  }
}
  handleSearch(event){
    var data = this.state.data;
    var name = event.target.value;
    var newData = [];
    for(var i=0;i<data.length;i++){
    var str = data[i].name;
      var match = str.toLowerCase().indexOf(name);
      if(match != -1){
        newData.push(data[i]);
      }

    }
    if(name == "")
      this.filterData(data);
    else{
      this.filterData(newData);
    }
  }
  render(){
  var data = this.state.data;
    return(
      <div id="app">
        <div>
          <input type="text" placeholder="Search..." onChange={this.handleSearch.bind(this)} />
        </div>
        <div>
          <input type="checkbox" onChange={this.handleChange.bind(this)} /> Only show products in stocks
        </div>
          <span id="name">Name</span><span>Price</span>
          <GoodsList goods={this.state.sportsGoods} category="Sproting Goods" />
          <GoodsList goods={this.state.electronics} category="Electronics" />
      </div>
    )
  }
}
