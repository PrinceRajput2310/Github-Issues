import React from "react";
import {Link } from "react-router-dom";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Project from "./Project";
import PullRequest from "./PullRequest";
import Code from "./Code"


 export default function NavBar(){
       
    const NavStyle={
             display:"flex",
             border:"1 px solid blue",
             backgroundColor:"skyblue"
    }

    return(
        <>
    <BrowserRouter>
        <ul className={NavStyle} style={{listStyleType:"none",textDecoration:"none"}}>
          <li><Link to ="/issues">issues</Link></li>
          <li><Link to ="/project">Project</Link></li>
          <li><Link to ="/code">Code</Link></li>
          <li><Link to ="/pullrequest">pullrequest</Link></li>

          </ul>



          <Switch>
                 <Route exact path="/issues" component={Code}/>

                 <Route exact path="/code" component={Project}/>

                 <Route exact path="/project" component={PullRequest}/>

             </Switch>






          </BrowserRouter> 

             </>
    )
}

