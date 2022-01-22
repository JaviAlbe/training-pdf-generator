import './App.css';
import {jsPDF} from "jspdf"
import ExerciseCard from "./card/ExerciseCard";

function createPDF(){
    const doc = new jsPDF();
    doc.text("Hello world!", 50, 50);
    doc.save("a4.pdf");
}

function App() {
  return (
    <div className="App">
        <ExerciseCard/>
        <button title="Generate PDF" onClick={() => createPDF()}>Generate PFD</button>
    </div>
  );
}

export default App;
