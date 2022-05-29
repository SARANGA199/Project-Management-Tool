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
import AddSubmissiontype from "./components/submission/addsubmissionType.jsx";
import DisplaysubType from "./components/submission/displaySubType.jsx";
import Topics from "./Components/TopicAcceptance/Topics";
import AcceptTopic from "./Components/TopicAcceptance/AcceptTopic";

import { DataProvider } from "./GlobalState";
import Login from "./Components/UserManagement/Login";
import Header from "./Components/Header/Header";
import Register from "./Components/UserManagement/Register";
import ForgotPassword from "./Components/UserManagement/ForgotPassword";
import ResetPassword from "./Components/UserManagement/ResetPassword";
import Profile from "./Components/UserManagement/Profile";
import AllUsers from "./Components/UserManagement/AllUsers";
import DocEvaluation from "./Components/UserManagement/DocEvaluation";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DataProvider>
      <BrowserRouter>
      <Header/>
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
          <Route path="/userList" element={<UserList />} />
          <Route path="/topicRegister" element={<TopicRegister />} />
          <Route path="/requestSupervisor" element={<RequestSupervisor />} />
          <Route path="/requestSupervisor" element={<RequestSupervisor />} />
          <Route path="/displayRequests" element={<DisplayRequests />} />
          <Route path="/addTemplate" element={<TemplateForm />} />
          <Route path="/display" element={<Displaytemplate />} />
          <Route path="/AddSubType" element={<AddSubmissiontype />} />
          <Route path="/displaysub" element={<DisplaysubType />} />

          <Route exact path="/login" > <Login/></Route>
          <Route exact path="/register" > <Register/></Route>
          <Route exact path="/fpass" > <ForgotPassword/></Route>
          <Route exact path="/user/reset/:id" > <ResetPassword/></Route>
          <Route exact path="/profile" > <Profile/></Route>
          <Route exact path="/allusers" > <AllUsers/></Route>
          <Route exact path="/doceval" > <DocEvaluation/></Route>
        </Routes>
      </BrowserRouter>
      </DataProvider>
    );
  }
}
