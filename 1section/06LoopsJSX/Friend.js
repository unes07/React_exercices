class Friend extends React.Component {
 render() {
   const {name, hobbies} = this.props;
  //  const lis = hobbies.map(h => <li>{h}</li>)
   return (
     <div>
       <p>{name}</p>
       <ul>
         {hobbies.map(h => <li>{h}</li>)}
         {/* "{lis}" */}
       </ul>
     </div>
    );
  }
}