import React, { Component,useContext } from "react";
import AddMarking from "./Components/Marking/AddMarking";
import DisplaySubmitPresentation from "./Components/PresentationEvaluation/DisplaySubmitPresentation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvaluatePresentation from "./Components/PresentationEvaluation/EvaluatePresentation";
import ViewMarkingSchemes from "./Components/Marking/ViewMarkingSchemes";
import UpdateMarking from "./Components/Marking/UpdateMarking";
import CreateGroup from "./Components/CreateGroup/CreateGroup";
import TopicRegister from "./Components/TopicRegister/TopicRegister";
import { RequestSupervisor } from "./Components/RequestSupervisor/RequestSupervisor";

import TemplateForm from "./Components/template/templateForm/templateForm.jsx";
import Displaytemplate from "./Components/template/displayTemplate/display.jsx";
import AddSubmissiontype from "./Components/submission/addsubmissionType.js";
import DisplaysubType from "./Components/submission/displaySubType.js";



import Topics from "./Components/TopicAcceptance/Topics";
import AcceptTopic from "./Components/TopicAcceptance/AcceptTopic";
import DisplayRequests from "./Components/DisplayRequests/DisplayRequests.js";
import TopicEvaluate from "./Components/TopicAcceptance/TopicEvaluate";
import AddPanelMember from "./Components/AlocatePanel/AddPanelMember.js";

import { DataProvider } from "./GlobalState";
import Login from "./Components/UserManagement/Login";
import Header from "./Components/Header/Header";
import Register from "./Components/UserManagement/Register";
import ForgotPassword from "./Components/UserManagement/ForgotPassword";
import ResetPassword from "./Components/UserManagement/ResetPassword";
import Profile from "./Components/UserManagement/Profile";
import AllUsers from "./Components/UserManagement/AllUsers";
import DocEvaluation from "./Components/UserManagement/DocEvaluation";
import CreateChat from "./Components/Chats/CreateChat";
import DisplayChats from "./Components/Chats/DisplayChats";
import ChatReply from "./Components/Chats/ChatReply";
import DisplayOneForum from "./Components/Chats/DisplayOneForum";
import UpdateReply from "./Components/Chats/UpdateReply";
import UpdateChatForum from "./Components/Chats/UpdateChatForum";
import DisplayAllForums from "./Components/Chats/DisplayAllForums";
import DisplayPresentationMarks from "./Components/PresentationEvaluation/DisplayPresentationMarks";

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
import AddMember from "./Components/AlocatePanel/AddMember.js";
import UpdateSubmissionType from "./Components/submission/UpdateSubmissionType";
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
          <Header />
          <Routes>
            <Route
              exact
              path="/submitPre"
              element={<DisplaySubmitPresentation />}
            />
            <Route path="/add" element={<AddMarking />} />
            <Route
              path="/evaluatePresentation"
              element={<EvaluatePresentation />}
            />
            <Route
              path="/presentationMarks"
              element={<DisplayPresentationMarks />}
            />

            <Route path="/topics" element={<Topics />} />
            <Route path="/acceptTopic" element={<AcceptTopic />} />
            <Route path="/viewMarking" element={<ViewMarkingSchemes />} />
            <Route path="/updateMarking" element={<UpdateMarking />} />

            <Route path="/createGroup" element={<CreateGroup />} />
            <Route path="/groupList" element={<GroupList />} />
            <Route path="/topicRegister" element={<TopicRegister />} />
            <Route path="/requestSupervisor" element={<RequestSupervisor />} />
            <Route path="/stdSubmitDoc" element={<StdSubmitDoc />} />
            <Route path="/topicSubmitDoc" element={<TopicSubmitDoc />} />
            <Route path="/displayRequests" element={<DisplayRequests />} />
            <Route path="/updateSupervisorStatus" element={<UpdateSupervisorStatus />} />
          <Route path="/requestCoSupervisor" element={<RequestCoSupervisor />} />
          <Route path="/displayCoSupervisors" element={<DisplayCoSupervisors />} />
          <Route path="/updateCoSupervisorStatus" element={<UpdateCoSupervisorStatus />} />

            <Route path="/addTemplate" element={<TemplateForm />} />
            <Route path="/display" element={<Displaytemplate />} />
            <Route path="/AddSubType" element={<AddSubmissiontype />} />
            <Route path="/displaysub" element={<DisplaysubType />} />
            <Route path="/updateSub" element={<UpdateSubmissionType />} />

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

            <Route path="/evaluateTopic" element={<TopicEvaluate />} />
            <Route path="/AddPanelMember" element={<AddPanelMember />} />
            <Route path="/" element={<CreateChat />} />
            <Route path="/displayChat" element={<DisplayChats />} />
            <Route path="/reply" element={<ChatReply />} />
            <Route path="/oneForum" element={<DisplayOneForum />} />
            <Route path="/editReply" element={<UpdateReply />} />
            <Route path="/editChatForum" element={<UpdateChatForum />} />
            <Route path="/allForums" element={<DisplayAllForums />} />
            <Route path="/addPanelMember" element={<AddPanelMember />} />
            <Route path="/addMember" element={< AddMember />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    );
  }
}
