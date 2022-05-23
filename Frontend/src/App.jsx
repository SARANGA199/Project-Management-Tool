import React, { Component } from "react";
import AddMarking from "./Components/Marking/AddMarking";
import DisplayMarking from "./Components/PresentationEvaluation/DisplayMarking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvaluatePresentation from "./Components/PresentationEvaluation/EvaluatePresentation";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayMarking />} />
          <Route path="/add" element={<AddMarking />} />
          <Route
            path="/evaluatePresentation"
            element={<EvaluatePresentation />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
