import { v4 as uuidv4 } from 'uuid'

const daysOfWeek = {
    "LUNES": 1,
    "MARTES": 2,
    "MIERCOLES": 3,
    "JUEVES": 4,
    "VIERNES": 5
}

export function getInitials(text) {
    const words = text.split(' ')
      let initials = ''
  
      words.forEach(word => {
        if(word == "I" || word == "II"){
            initials += word
        }
        else if (word.length > 3) {
            initials += word.charAt(0)
        }
    });
      return initials.toUpperCase()
  }


export function createEvents(sessions, code, color){
    console.log(sessions)
return sessions.map(session =>({
    id: uuidv4(),
    title: `${code} - grupo ${session.group} ${session.classroom}`,
    subject_code: session.subject.toString(),
    startTime: session.start_time.substring(0,5),
    endTime: session.ending_time.substring(0,5),
    daysOfWeek: [session.day],
    backgroundColor: color,
    color: color,
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
