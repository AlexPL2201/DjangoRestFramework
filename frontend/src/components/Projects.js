import React from "react";

const ProjectItem = ({ item }) => {
    let link = `/project/${item.id}`
    return(
        <tr>
        <td>{item.id}</td>
		<td>{item.project_name}</td>
		<td>{/*<Link to={link}>*/}{link}{/*</Link>*/}</td>
		<td>{String(item.users)}</td>
		</tr>
    )
}

const ProjectList = ({ items }) => {
    return(
		<table style={{'margin': 'auto'}}>
		    <th style={{'width': '10%'}}>ID</th>
		    <th style={{'width': '25%'}}>Project</th>
		    <th style={{'width': '55%'}}>Repository link</th>
            <th style={{'width': '10%'}}>Users</th>
		    {items.map((item) => <ProjectItem item={item}/>)}
		</table>
	)
}


export default ProjectList