import React, { Component } from "react";
import AddMarking from "./Components/Marking/AddMarking";
import DisplayMarking from "./Components/PresentationEvaluation/DisplayMarking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvaluatePresentation from "./Components/PresentationEvaluation/EvaluatePresentation";
import TopicAcceptance from "./Components/TopicAcceptance/TopicAcceptance";
import ViewMarkingSchemes from "./Components/Marking/ViewMarkingSchemes";
import UpdateMarking from "./Components/Marking/UpdateMarking";

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

          <Route path="/topicAccept" element={<TopicAcceptance />} />
          <Route path="/viewMarking" element={<ViewMarkingSchemes />} />
          <Route path="/updateMarking" element={<UpdateMarking />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
