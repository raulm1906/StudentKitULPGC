const daysOfWeek = {
    "LUNES": 1,
    "MARTES": 2,
    "MIERCOLES": 3,
    "JUEVES": 4,
    "VIERNES": 5
}

export function createEvents(sessions, id){
return sessions.map(session =>({
    id: id,
    title: `${id} Grupo ${session.Group}`,
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
