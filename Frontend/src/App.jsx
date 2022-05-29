import React, { Component } from "react";
import AddMarking from "./Components/Marking/AddMarking";
import DisplayMarking from "./Components/PresentationEvaluation/DisplayMarking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvaluatePresentation from "./Components/PresentationEvaluation/EvaluatePresentation";
import ViewMarkingSchemes from "./Components/Marking/ViewMarkingSchemes";
import UpdateMarking from "./Components/Marking/UpdateMarking";
import CreateGroup from "./Components/CreateGroup/CreateGroup";
import UserList from "./Components/DisplayGroupsList/DisplayGroupList";
import TopicRegister from "./Components/TopicRegister/TopicRegister";
import { RequestSupervisor } from "./Components/RequestSupervisor/RequestSupervisor";
import TemplateForm from "./components/template/templateForm/templateForm.jsx";
import Displaytemplate from "./components/template/displayTemplate/display.jsx";
import AddSubmissiontype from "./components/submission/addsubmissionType.js";
import DisplaysubType from "./components/submission/displaySubType.js";
import Topics from "./components/TopicAcceptance/Topics.js";
import AcceptTopic from "./components/TopicAcceptance/AcceptTopic.js";
import TopicEvaluate from "./components/TopicAcceptance/TopicEvaluate";
import DisplayRequests from "./components/DisplayRequests/DisplayRequests.js";

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

          <Route path="/topics" element={<Topics />} />
          <Route path="/acceptTopic" element={<AcceptTopic />} />
          <Route path="/evaluateTopic" element={<TopicEvaluate />} />
          <Route path="/viewMarking" element={<ViewMarkingSchemes />} />
          <Route path="/updateMarking" element={<UpdateMarking />} />
          <Route path="/createGroup" element={<CreateGroup />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/topicRegister" element={<TopicRegister />} />
          <Route path="/requestSupervisor" element={<RequestSupervisor />} />
          {/* <Route path="/requestSupervisor" element={<RequestSupervisor />} /> */}
          <Route path="/displayRequests" element={<DisplayRequests />} />
          <Route path="/addTemplate" element={<TemplateForm />} />
          <Route path="/display" element={<Displaytemplate />} />
          <Route path="/AddSubType" element={<AddSubmissiontype />} />
          <Route path="/displaysub" element={<DisplaysubType />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
