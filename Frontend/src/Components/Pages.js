import React, { useContext } from "react";
import AddMarking from "./Marking/AddMarking";
import DisplaySubmitPresentation from "./PresentationEvaluation/DisplaySubmitPresentation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EvaluatePresentation from "./PresentationEvaluation/EvaluatePresentation";
import ViewMarkingSchemes from "./Marking/ViewMarkingSchemes";
import UpdateMarking from "./Marking/UpdateMarking";
import CreateGroup from "./CreateGroup/CreateGroup";
import TopicRegister from "./TopicRegister/TopicRegister";
import { RequestSupervisor } from "./RequestSupervisor/RequestSupervisor";

import TemplateForm from "./template/templateForm/templateForm.jsx";
import Displaytemplate from "./template/displayTemplate/display.jsx";
import AddSubmissiontype from "./submission/addsubmissionType.js";
import DisplaysubType from "./submission/displaySubType.js";



import Topics from "./TopicAcceptance/Topics";
import AcceptTopic from "./TopicAcceptance/AcceptTopic";
import DisplayRequests from "./DisplayRequests/DisplayRequests.js";
import TopicEvaluate from "./TopicAcceptance/TopicEvaluate";
import AddPanelMember from "./AlocatePanel/AddPanelMember.js";

import { GlobalState } from '../GlobalState.js'
import Login from "./UserManagement/Login";
import Register from "./UserManagement/Register";
import ForgotPassword from "./UserManagement/ForgotPassword";
import ResetPassword from "./UserManagement/ResetPassword";
import Profile from "./UserManagement/Profile";
import AllUsers from "./UserManagement/AllUsers";
import CreateChat from "./Chats/CreateChat";
import DisplayChats from "./Chats/DisplayChats";
import ChatReply from "./Chats/ChatReply";
import DisplayOneForum from "./Chats/DisplayOneForum";
import UpdateReply from "./Chats/UpdateReply";
import UpdateChatForum from "./Chats/UpdateChatForum";
import DisplayAllForums from "./Chats/DisplayAllForums";
import DisplayPresentationMarks from "./PresentationEvaluation/DisplayPresentationMarks";
import DisplayDocumentMarks from "./DocumentEvaluation/DisplayDocumentsMarks";

import CreateGroup from "./CreateGroup/CreateGroup";
import GroupList from "./DisplayGroupsList/DisplayGroupList";
import TopicRegister from "./TopicRegister/TopicRegister";
import { RequestSupervisor } from "./RequestSupervisor/RequestSupervisor";
import DisplayRequests  from "./DisplayRequests/DisplayRequests";
import StdSubmitDoc from "./StdSubmitDoc/StdSubmitDoc.jsx";
import TopicSubmitDoc from "./TopicSubmitDoc/TopicSubmitDoc.js"
import UpdateSupervisorStatus from "./DisplayRequests/UpdateSupervisorStatus";
import RequestCoSupervisor from "./RequestCoSupervisor/RequestCoSupervisor";
import DisplayCoSupervisors from "./RequestCoSupervisor/DisplayCoSupervisors";
import UpdateCoSupervisorStatus from "./RequestCoSupervisor/UpdateCoSupervisors";
import AddMember from "./AlocatePanel/AddMember.js";
import UpdateSubmissionType from "./submission/UpdateSubmissionType";
import PendingUsers from "./UserManagement/PendingUsers.js";
import UpdateUser from "./UserManagement/UpdateUser.js";
import ActivationEmail from "./UserManagement/ActivationEmail";
import PendActivationEmail from "./UserManagement/PendActivationEmail.js"
import DocumentEvaluation from "./DocumentEvaluation/DocumentEvaluation.js";
import DisplaySubmitDocuments from "./DocumentEvaluation/DisplaySubmitDocuments";
import DisplayDocumentMarks from "./DocumentEvaluation/DisplayDocumentsMarks";
import NotFound from "./utils/NotFound/NotFound.JS";
import Home from "./Components/Home/Home";
import AdminDashboard from "./Components/DashBoard/AdminDashboard";

function Pages() {

  const state = useContext(GlobalState)
  const [isLogged ] = state.UserAPI.isLogged
  const [isAdmin,setIsAdmin ] = state.UserAPI.isAdmin
  const [isSupervisor, setIsSupervisor] = state.UserAPI.isSupervisor
  const [isPanelMember, setIsPanelMember] = state.UserAPI.isPanelMember
  const [isCoSupervisor, setisCoSupervisor] = state.UserAPI.isCoSupervisor

  return (
          <Routes>
            <Route exact path="/submitPre" element={isLogged ? <DisplaySubmitPresentation /> : <NotFound/>}/>
            <Route path="/add" element={isAdmin ? <AddMarking /> : <NotFound/>} />
            <Route path="/evaluatePresentation" element={isAdmin||isPanelMember ? <EvaluatePresentation /> : <NotFound/>}/>
            <Route path="/presentationMarks" element={isLogged ?<DisplayPresentationMarks /> : <NotFound/>}/>
            <Route path="/topics" element={isLogged ?<Topics /> : <NotFound/>} />
            <Route path="/acceptTopic" element={isSupervisor||isCoSupervisor? <AcceptTopic /> : <NotFound/>} />
            <Route path="/viewMarking" element={isLogged ?<ViewMarkingSchemes /> : <NotFound/>} />
            <Route path="/updateMarking" element={isLogged ?<UpdateMarking /> : <NotFound/>} />

            <Route path="/createGroup" element={isLogged ? <CreateGroup /> : <NotFound/>} />
            <Route path="/groupList" element={isLogged ? <GroupList /> : <NotFound/>} />
            <Route path="/topicRegister" element={isLogged ?<TopicRegister /> : <NotFound/>} />
            <Route path="/requestSupervisor" element={isLogged ?<RequestSupervisor /> : <NotFound/>} />
            <Route path="/stdSubmitDoc" element={isLogged ?<StdSubmitDoc /> : <NotFound/>} />
            <Route path="/topicSubmitDoc" element={isLogged ?<TopicSubmitDoc /> : <NotFound/>} />
            <Route path="/displayRequests" element={isLogged ?<DisplayRequests /> : <NotFound/>} />
            <Route path="/updateSupervisorStatus" element={isLogged ?<UpdateSupervisorStatus /> : <NotFound/>} />
            <Route path="/requestCoSupervisor" element={isLogged ?<RequestCoSupervisor /> : <NotFound/>} />
            <Route path="/displayCoSupervisors" element={isLogged ?<DisplayCoSupervisors /> : <NotFound/>} />
            <Route path="/updateCoSupervisorStatus" element={isLogged ?<UpdateCoSupervisorStatus /> : <NotFound/>} />

            <Route path="/addTemplate" element={isLogged ? <TemplateForm /> : <NotFound/>} />
            <Route path="/display" element={ isLogged ? <Displaytemplate /> : <NotFound/>} />
            <Route path="/AddSubType" element={ isAdmin ? <AddSubmissiontype /> : <NotFound/>} />
            <Route path="/displaysub" element={ isLogged ? <DisplaysubType /> : <NotFound/>} />
            <Route path="/updateSub" element={ isLogged ? <UpdateSubmissionType /> : <NotFound/>} />

            <Route path="/login" element={isLogged ? <NotFound/> : <Login/>} />
            <Route path="/register" element={isLogged ? <NotFound/> : <Register/>} />
            <Route path="/fpass" element={<ForgotPassword/>} />
            <Route path="/user/reset/:token" element={<ResetPassword/>} />
            <Route path="/profile" element={isLogged ? <Profile/> : <NotFound/>} />
            <Route path="/allusers" element={isLogged ? <AllUsers/> : <NotFound/>} />
            <Route path="/PendingUsers" element={isAdmin ? <PendingUsers/> : <NotFound/>} />
            <Route path="/updateuser/:id" element={isLogged ? <UpdateUser/> : <NotFound/>} />
            <Route path="/user/activate/:activation_token" element={<ActivationEmail/>} />
            <Route path="/pending/activate/:activation_token" element={<PendActivationEmail/>} />
            <Route path="/evaluatedocument" element={isAdmin||isSupervisor||isCoSupervisor? <DocumentEvaluation/> : <NotFound/>} />
            <Route path="/submitdocs" element={isLogged ? <DisplaySubmitDocuments/> : <NotFound/>} />
            <Route path="/documentmarks" element={isLogged ? <DisplayDocumentMarks/> : <NotFound/>} />

            <Route path="/evaluateTopic" element={isLogged ? <TopicEvaluate /> : <NotFound/>} />
            <Route path="/AddPanelMember" element={isLogged ? <AddPanelMember /> : <NotFound/>} />
            <Route path="/" element={isLogged ? <CreateChat /> : <NotFound/>} />
            <Route path="/displayChat" element={ isLogged ? <DisplayChats /> : <NotFound/>} />
            <Route path="/reply" element={isLogged ? <ChatReply /> : <NotFound/>} />
            <Route path="/oneForum" element={isLogged ? <DisplayOneForum /> : <NotFound/>} />
            <Route path="/editReply" element={isLogged ? <UpdateReply /> : <NotFound/>} />
            <Route path="/editChatForum" element={isLogged ? <UpdateChatForum /> : <NotFound/>} />
            <Route path="/allForums" element={isLogged ? <DisplayAllForums /> : <NotFound/>} />
            <Route path="/addPanelMember" element={isLogged ? <AddPanelMember /> : <NotFound/>} />
            <Route path="/addMember" element={isLogged ? < AddMember /> : <NotFound/>} />
          </Routes>
  );
}

export default Pages;
