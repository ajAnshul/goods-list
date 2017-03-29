import React from 'react';


export default class PersonalInfo extends React.Component{
  constructor(props){
    super(props);
  }

  renderGoods(){
    this.props.goods.map(function(value,index){
      return (
        <p key={index}>{value.name} ye {value.price}</p>
      )
    })
  }

  render(){
    return(
      <div>
        <p>{this.props.category}</p>
        <table>
          <tbody>
          {this.props.goods.map(function(value,index){
            return (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.price}</td>
            </tr>
            )})}
          </tbody>
        </table>
      </div>

    )
  }
}
