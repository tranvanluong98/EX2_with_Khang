import React from 'react';
import './CSS/Table.css';
class Table extends React.Component{
    render(){
        return (
            <table className="table">
  <tr className="tr">
    <th className="th">My Account</th>
    <th className="th">Account Info</th> 
    <th className="th">Custumer Service</th>
    <th className="th">Policies</th>
    <th className="th">Quick Help</th>
  </tr>
  
  <tr className="tr">
    <td className="td">LuongBEAT</td>
    <td className="td">Actived</td>
    <td className="td">Phone</td>
    <td className="td">Retum Policy</td>
    <td className="td">Shipping Policy </td>
  </tr>
  
  <tr className="tr">
    <td className="td">KhangSpTiKi</td>
    <td className="td">Actived</td>
    <td className="td">Phone</td>
    <td className="td">Retum Policy</td>
    <td className="td">Shipping Policy </td>
  </tr>
  
  <tr className="tr">
    <td className="td">PhuongFun</td>
    <td className="td">Actived</td>
    <td className="td">Phone</td>
    <td className="td">Retum Policy</td>
    <td className="td">Shipping Policy </td>
  </tr>
 
  <tr className="tr">
    <td className="td">HieuCancer</td>
    <td className="td">Actived</td>
    <td className="td">Phone</td>
    <td className="td">Retum Policy</td>
    <td className="td">Shipping Policy </td>
  </tr>
  
  <tr className="tr">
    <td className="td">HoangDope</td>
    <td className="td">Actived</td>
    <td className="td">Phone</td>
    <td className="td">Retum Policy</td>
    <td className="td">Shipping Policy </td>
  </tr>
</table>
        );
    }
}
export default Table;
