import React from "react";
// import { makeStyles } from "@mui/styles";
import { Pagination } from '@mui/material';


// const useStyles = makeStyles((theme) => ({
	// root: {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	"& > *": {
	// 		margin: theme.spacing(2),
	// 	},
	// },
// }));

function Page (props) {
	// const classes = useStyles();
	let page = props.page + 1;
	return (
		<div className="pageRoot">
			<Pagination size="large" shape="rounded" page={page} count={props.nextPageAvailable ? page + 1 : page} color="secondary" onChange={(event, page) => props.setPage(page - 1)} />
		</div>
	);
}

export default Page;
