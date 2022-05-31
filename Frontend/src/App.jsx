import React, { Component } from "react";
import AddMarking from "./Components/Marking/AddMarking";
import DisplayMarking from "./Components/PresentationEvaluation/DisplayMarking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvaluatePresentation from "./Components/PresentationEvaluation/EvaluatePresentation";
import ViewMarkingSchemes from "./Components/Marking/ViewMarkingSchemes";
import UpdateMarking from "./Components/Marking/UpdateMarking";
import TemplateForm from "./Components/template/templateForm/templateForm.jsx";
import Displaytemplate from "./Components/template/displayTemplate/display.jsx";
import AddSubmissiontype from "./Components/submission/addsubmissionType.js";
import DisplaysubType from "./Components/submission/displaySubType.js";
import Topics from "./Components/TopicAcceptance/Topics";
import AcceptTopic from "./Components/TopicAcceptance/AcceptTopic";

import CreateGroup from "./Components/CreateGroup/CreateGroup";
import GroupList from "./Components/DisplayGroupsList/DisplayGroupList";
import TopicRegister from "./Components/TopicRegister/TopicRegister";
import { RequestSupervisor } from "./Components/RequestSupervisor/RequestSupervisor";
import DisplayRequests  from "./Components/DisplayRequests/DisplayRequests";
import StdSubmitDoc from "./Components/StdSubmitDoc/StdSubmitDoc.jsx";
import TopicSubmitDoc from "./Components/TopicSubmitDoc/TopicSubmitDoc.js"
import UpdateSupervisorStatus from "./Components/DisplayRequests/UpdateSupervisorStatus";
import RequestCoSupervisor from "./Components/RequestCoSupervisor/RequestCoSupervisor";
import DisplayCoSupervisors from "./Components/RequestCoSupervisor/DisplayCoSupervisors";
import UpdateCoSupervisorStatus from "./Components/RequestCoSupervisor/UpdateCoSupervisors";

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
          <Route path="/viewMarking" element={<ViewMarkingSchemes />} />
          <Route path="/updateMarking" element={<UpdateMarking />} />

          <Route path="/createGroup" element={<CreateGroup />} />
          <Route path="/groupList" element={<GroupList />} />
          <Route path="/topicRegister" element={<TopicRegister />} />
          <Route path="/requestSupervisor" element={<RequestSupervisor />} />
          <Route path="/displayRequests" element={<DisplayRequests />} />
          <Route path="/stdSubmitDoc" element={<StdSubmitDoc />} />
          <Route path="/topicSubmitDoc" element={<TopicSubmitDoc />} />
          <Route path="/updateSupervisorStatus" element={<UpdateSupervisorStatus />} />
          <Route path="/requestCoSupervisor" element={<RequestCoSupervisor />} />
          <Route path="/displayCoSupervisors" element={<DisplayCoSupervisors />} />
          <Route path="/updateCoSupervisorStatus" element={<UpdateCoSupervisorStatus />} />

          <Route path="/addTemplate" element={<TemplateForm />} />
          <Route path="/display" element={<Displaytemplate />} />
          <Route path="/AddSubType" element={<AddSubmissiontype />} />
          <Route path="/displaysub" element={<DisplaysubType />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
