import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        </ul>
      </header>
    </div>

    <table className="table table-hover">
          <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Heading</th>
            <th scope="col">Heading</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">Default</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          
          <tr className="table-primary">
            <th scope="row">Primary</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr className="table-secondary">
            <th scope="row">Secondary</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr className="table-success">
            <th scope="row">Success</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr className="table-danger">
            <th scope="row">Danger</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">Warning</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr className="table-info">
            <th scope="row">Info</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr className="table-light">
            <th scope="row">Light</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr className="table-dark">
            <th scope="row">Dark</th>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          </tbody>
        </table>






    </div>
  );
}

export default App;
