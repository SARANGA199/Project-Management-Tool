import React, { Component,useContext } from "react";
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
import Topics from "./Components/TopicAcceptance/Topics";
import AcceptTopic from "./Components/TopicAcceptance/AcceptTopic";
import DisplayRequests from "./Components/DisplayRequests/DisplayRequests.js";

import { DataProvider } from "./GlobalState";
import Login from "./Components/UserManagement/Login";
import Header from "./Components/Header/Header";
import Register from "./Components/UserManagement/Register";
import ForgotPassword from "./Components/UserManagement/ForgotPassword";
import ResetPassword from "./Components/UserManagement/ResetPassword";
import Profile from "./Components/UserManagement/Profile";
import AllUsers from "./Components/UserManagement/AllUsers";
import PendingUsers from "./Components/UserManagement/PendingUsers.js";
import UpdateUser from "./Components/UserManagement/UpdateUser.js";
import ActivationEmail from "./Components/UserManagement/ActivationEmail";
import PendActivationEmail from "./Components/UserManagement/PendActivationEmail.js"
import DocumentEvaluation from "./Components/DocumentEvaluation/DocumentEvaluation.js";
import DisplaySubmitDocuments from "./Components/DocumentEvaluation/DisplaySubmitDocuments";
import NotFound from "./Components/utils/NotFound/NotFound.JS";

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
          <Route path="/displayMarking" element={<DisplayMarking />} />
          <Route path="/add" element={<AddMarking />} />
          <Route path="/evaluatePresentation" element={<EvaluatePresentation />}/>
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

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/fpass" element={<ForgotPassword/>} />
          <Route path="/user/reset/:token" element={<ResetPassword/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/allusers" element={<AllUsers/>} />
          <Route path="/PendingUsers" element={<PendingUsers/>} />
          <Route path="/updateuser/:id" element={<UpdateUser/>} />
          <Route path="/user/activate/:activation_token" element={<ActivationEmail/>} />
          <Route path="/pending/activate/:activation_token" element={<PendActivationEmail/>} />
          <Route path="/evaluatedocument" element={<DocumentEvaluation/>} />
          <Route path="/submitdocs" element={<DisplaySubmitDocuments/>} />

        </Routes>
      </BrowserRouter>
      </DataProvider>
    );
  }
}
