import React from "react";


const UserItem = ({item}) => {
	return(
		<tr>
		<td>{item.username}</td>
		<td>{item.first_name}</td>
		<td>{item.last_name}</td>
		<td>{item.email}</td>
		</tr>
	)
}


const UserList = ({ items }) => {
	return(
		<table style={{'margin': 'auto'}}>
		    <th style={{'width': '25%'}}>UserName</th>
		    <th style={{'width': '25%'}}>FirstName</th>
		    <th style={{'width': '25%'}}>LastName</th>
		    <th style={{'width': '25%'}}>Email</th>
		    {items.map((item) => <UserItem item={item}/>)}
		</table>
	)
}


export default UserList;