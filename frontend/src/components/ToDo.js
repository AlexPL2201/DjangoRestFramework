import React from "react";


const ToDoItem = ({ item }) => {
	return(
		<tr>
		    <td>{item.note}</td>
		    <td>{item.note_text}</td>
		    <td>{item.created}</td>
		    <td>{String(item.status)}</td>
		    <td>{item.creator}</td>
		    <td>{item.project}</td>
		</tr>
	)
}


const ToDoList = ({items}) => {
	return(
		<table style={{'margin': 'auto'}}>
		    <th style={{'width': '10%'}}>Note</th>
		    <th style={{'width': '50%'}}>Text</th>
		    <th style={{'width': '25%'}}>Created</th>
		    <th style={{'width': '5%'}}>Status</th>
		    <th style={{'width': '5%'}}>Creator</th>
		    <th style={{'width': '5%'}}>Project</th>
		    {items.map((item) => <ToDoItem item={item}/>)}
		</table>
	)
}


export default ToDoList;