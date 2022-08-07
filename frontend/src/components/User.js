import React from "react";


const UserItem = ({user}) => {
	return(
		<tr>
		<td>{user.username}</td>
		<td>{user.first_name}</td>
		<td>{user.last_name}</td>
		<td>{user.email}</td>
		</tr>
	)
}


const UserList = ({users}) => {
	return(
		<table style={{'margin': 'auto'}}>
		<th style={{'width': '25%'}}>UserName</th>
		<th style={{'width': '25%'}}>FirstName</th>
		<th style={{'width': '25%'}}>LastName</th>
		<th style={{'width': '25%'}}>Email</th>
		{users.map((user) => <UserItem user={user}/>)}
		</table>
	)
}


export default UserList;