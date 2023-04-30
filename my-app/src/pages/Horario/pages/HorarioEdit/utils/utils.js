import { v4 as uuidv4 } from 'uuid'

const daysOfWeek = {
    "LUNES": 1,
    "MARTES": 2,
    "MIERCOLES": 3,
    "JUEVES": 4,
    "VIERNES": 5
}

export function createEvents(sessions, id){
return sessions.map(session =>({
    id: uuidv4(),
    title: `${id} Grupo ${session.Group}`,
    subject_code: id,
    startTime: session.IHour,
    endTime: session.FHour,
    daysOfWeek: [daysOfWeek[`${session.Day}`]], // 1 = Monday
    startRecur: '2023-03-01T00:00:00', 
    endRecur: '2024-05-01T00:00:00',
    rrule: {
        freq: 'weekly',
        interval: 1,
    },
}))
}


export function loadEvents(events){
    return events.map(event =>({
        id: uuidv4(),
        title: event.title,
        startTime: event.start_time,
        endTime: event.end_time,
        daysOfWeek: [event.days_of_week], // 1 = Monday
        startRecur: '2023-03-01T00:00:00', 
        endRecur: '2024-05-01T00:00:00',
        rrule: {
            freq: 'weekly',
            interval: 1,
        },
    }))
}
