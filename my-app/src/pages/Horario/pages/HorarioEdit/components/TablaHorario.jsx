import React, {useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"
import { Flex, Button, Box } from "@chakra-ui/react"

  

function MyCalendar() {

    
    var today = new Date();
    var mondayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
    mondayStart.setHours(8)
    mondayStart.setMinutes(30)
    var mondayEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
    mondayEnd.setHours(10)
    mondayEnd.setMinutes(30)

    const [events, setEvents] = useState([]);

  const handleEventAdd = () => {
    const newEvent = {
      title: 'My Event',
      start: mondayStart,
      end: mondayEnd,
    };
    setEvents([...events, newEvent]);
  };


    return (
        <Box maxW="100%" margin={5} transition="0.5s ease all">
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
  
  
  
  