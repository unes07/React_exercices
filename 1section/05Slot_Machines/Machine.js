class Machine extends React.Component {
 render() {
   const {e1,e2,e3}= this.props;
   const winner = (e1 === e2) && (e2 === e3);
    return (
     <div>
       <p> {e1} {e2} {e3} </p>
       <p>{winner? 'Winner' : "Loser"}</p>
     </div>
    );
}
}