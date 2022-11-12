const navigationData = {
    mentors: [
        {
            id: 1,
            label: 'All Mentors',
            name: 'mentors',
            availableFor: [],
            icon: '',
            path: '/mentors'

        },
        {
            id: 2,
            label: 'Mentors Application',
            name: 'mentors_application',
            availableFor: [],
            icon: '',
            path: '/mentor-applications'
        },
        {
            id: 3,
            label: 'Profile Update',
            name: 'mentors_profile_update_application',
            availableFor: [],
            icon: '',
            path: '/profile-update-applications'
        }
    ],
    students:[
        {
            id: 1,
            label: 'Students',
            name: 'students',
            availableFor: [],
            path: '/students'
        },
    ],
    appointments: [
        {
            id: 1,
            label: 'Appointment Application',
            name: 'appointment_applicaiton',
            availableFor: [],
            path: '/appointment-applications'
        },
        {
            id: 2,
            label: 'Scheduled Appointment',
            name: 'scheduled_appointment',
            availableFor: [],
            path: '/appointment-schedule'
        },
        {
            id: 3,
            label: 'Denied Appointment',
            name: 'denied_appointment',
            availableFor: [],
            path: '/denied-appointment'
        },
        {
            id: 4,
            label: 'Appointment Records',
            name: 'appointment_records',
            availableFor: [],
            path: '/appointment-records'
        },
    ],
    conversation:[
        {
            id: 1,
            label: 'Conversation',
            name: 'conversation',
            path: '/conversation'
        },
    ],
    services:[
        {
            id: 1,
            label: 'Services',
            name: 'services',
            availableFor: []
        },
    ],
    
}


export default navigationData;