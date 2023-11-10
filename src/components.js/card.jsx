import Paper from '@mui/material/Paper';
import Header from './header';

export default function Card(props){
    return(

        <Paper elevation={3} className="card">
            <Header/>
            <p>{props.value}</p>
        </Paper>
    )
}