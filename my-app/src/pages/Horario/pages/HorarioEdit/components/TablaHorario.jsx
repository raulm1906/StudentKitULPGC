import React, {useContext, useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"
import { Box, Button } from "@chakra-ui/react"
import AppContext from "../../../../../app/AppContext";

  

function MyCalendar() {

    const {events, setEvents} = useContext(AppContext)

    function handleClick(){
        const newEvent = 
        {
            title: 'Recurring Event',
            startTime: '08:30',
            endTime: '10:30',
            daysOfWeek: [1], // 1 = Monday
            startRecur: '2023-03-01T00:00:00', // start recurrence from today
            endRecur: '2024-05-01T00:00:00', // end recurrence 1 year from now
            // RRule object that defines the recurrence pattern
            rrule: {
              freq: 'weekly',
              interval: 1,
              byweekday: ['mo'] // use RRule.MO instead of 1 to specify Monday
            }
          }
        setEvents([...events, newEvent])
        console.log(newEvent)
    }

    return (
        
        <Box maxW="100%" margin={5} transition="0.5s ease all">
            <Button onClick={handleClick}></Button>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="timeGridWeek"
                allDaySlot={false}
                contentHeight="auto"
                events={events}
                dayHeaderContent={info => {
                    const date = info.date.toLocaleString('en-US', {
                    weekday: 'long',
                    
                    });
                    return <div>{date}</div>;
                }}
                headerToolbar={{
                    start: '',
                    center: '',
                    end: '' 
                }}
                hiddenDays={[0, 6]}
                businessHours={{
                daysOfWeek: [1, 2, 3, 4, 5]
                }}
                slotMinTime="08:30:00"
                slotMaxTime="14:30:00"
                slotLabelFormat={{
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true,
                meridiem: 'short'
                }}
                slotLabelInterval={{
                hours: 1
                }}
                slotDuration={{
                minutes: 30
                }}
            />
        </Box>
      
    );
  }

  export default MyCalendar
  
  
  
  