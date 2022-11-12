import React from "react";
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Invoices from "../scenes/invoices";
import Contacts from "../scenes/contacts";
import Bar from "../scenes/bar";
import Form from "../scenes/form";
import Line from "../scenes/line";
import Pie from "../scenes/pie";
import FAQ from "../scenes/faq";
import Geography from "../scenes/geography";
import Calendar from "../scenes/calendar/calendar";
import { Routes, Route } from "react-router-dom";
import Mentors from "../scenes/mentors";
import MentorApplication from "../scenes/mentors/mentorApplication";
import ProfileUpdateApplication from "../scenes/mentors/profileUpdate";
import Students from "../scenes/students";
import AppointmentApplication from "../scenes/appointment/appointmentApplication";
import ScheduledAppointmentApplication from "../scenes/appointment/scheduledAppointment";
import DeniedAppointment from "../scenes/appointment/deniedAppointment";
import AppointmentRecords from "../scenes/appointment/appointmentRecords";
import Profile from "../scenes/profile";
import ChatPage from "../scenes/conversation";
import Conversations from "../scenes/conversation/conversations";

export default function _Routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/mentor-applications" element={<MentorApplication />} />
        <Route
          path="/profile-update-applications"
          element={<ProfileUpdateApplication />}
        />
        <Route path="/students" element={<Students />} />
        <Route
          path="/appointment-applications"
          element={<AppointmentApplication />}
        />
        <Route
          path="/appointment-schedule"
          element={<ScheduledAppointmentApplication />}
        />
        <Route path="/denied-appointment" element={<DeniedAppointment />} />
        <Route path="/appointment-records" element={<AppointmentRecords />} />
        <Route path="/students/profile" element={<Profile />} />
        <Route path="/message" element={<ChatPage />} />
        <Route path="/conversation" element={<Conversations />} />
      </Routes>
    </div>
  );
}
