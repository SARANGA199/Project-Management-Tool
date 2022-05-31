import React, { Component } from "react";
import AddMarking from "./Components/Marking/AddMarking";
import DisplaySubmitPresentation from "./Components/PresentationEvaluation/DisplaySubmitPresentation";
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
import Topics from "./Components/TopicAcceptance/Topics";
import AcceptTopic from "./Components/TopicAcceptance/AcceptTopic";
import DisplayRequests from "./Components/DisplayRequests/DisplayRequests.js";
import TopicEvaluate from "./components/TopicAcceptance/TopicEvaluate";
import AddPanelMember from "./components/AlocatePanel/AddPanelMember.js";

import { DataProvider } from "./GlobalState";
import Login from "./Components/UserManagement/Login";
import Header from "./Components/Header/Header";
import Register from "./Components/UserManagement/Register";
import ForgotPassword from "./Components/UserManagement/ForgotPassword";
import ResetPassword from "./Components/UserManagement/ResetPassword";
import Profile from "./Components/UserManagement/Profile";
import AllUsers from "./components/UserManagement/AllUsers";
import DocEvaluation from "./Components/UserManagement/DocEvaluation";
import AddMember from "./components/AlocatePanel/AddMember.js";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<DisplaySubmitPresentation />} />
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
            <Route path="/userList" element={<UserList />} />
            <Route path="/topicRegister" element={<TopicRegister />} />
            <Route path="/requestSupervisor" element={<RequestSupervisor />} />
            <Route path="/requestSupervisor" element={<RequestSupervisor />} />
            <Route path="/displayRequests" element={<DisplayRequests />} />
            <Route path="/addTemplate" element={<TemplateForm />} />
            <Route path="/display" element={<Displaytemplate />} />
            <Route path="/AddSubType" element={<AddSubmissiontype />} />
            <Route path="/displaysub" element={<DisplaysubType />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/fpass" element={<ForgotPassword />} />
            <Route path="/user/reset/:id" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/doceval" element={<DocEvaluation />} />

            <Route path="/evaluateTopic" element={<TopicEvaluate />} />
            <Route path="/addPanelMember" element={<AddPanelMember />} />
            <Route path="/addMember" element={< AddMember />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    );
  }
}
