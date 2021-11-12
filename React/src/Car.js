import logo from './logo.svg';


function Car(props) {
 
  return (
    <div className="Car">
      <header className="Car-header">
        {props.Carname}
      </header>
    </div>
  );
}

export default Car;