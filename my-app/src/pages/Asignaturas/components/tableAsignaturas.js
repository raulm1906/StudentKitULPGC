import React from 'react';

const data = [
  {
    "Classroom": "A3-3",
    "Day": "MARTES",
    "FHour": "9:30",
    "Group": "1",
    "IHour": "8:30",
    "Week": "ambos"
  },
  {
    "Classroom": "A3-3",
    "Day": "MIERCOLES",
    "FHour": "9:30",
    "Group": "1",
    "IHour": "8:30",
    "Week": "ambos"
  },
  {
    "Classroom": "A3-3",
    "Day": "JUEVES",
    "FHour": "14:30",
    "Group": "17",
    "IHour": "12:30",
    "Week": "ambos"
  }
];

const days = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES'];

function TimeTable() {
  const tableData = {};

  // organize data by day
  data.forEach(item => {
    if (!tableData[item.Day]) {
      tableData[item.Day] = [];
    }
    tableData[item.Day].push(item);
  });

  // sort data by hour
  for (const day in tableData) {
    tableData[day].sort((a, b) => {
      const hourA = Number(a.IHour.replace(':', '.'));
      const hourB = Number(b.IHour.replace(':', '.'));
      return hourA - hourB;
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Classroom</th>
          <th>Group</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
      </thead>
      <tbody>
        {days.map(day => (
          <React.Fragment key={day}>
            <tr>
              <td>{day}</td>
              <td colSpan={4}></td>
            </tr>
            {tableData[day] && tableData[day].map(item => (
              <tr key={item.IHour}>
                <td></td>
                <td>{item.Classroom}</td>
                <td>{item.Group}</td>
                <td>{item.IHour}</td>
                <td>{item.FHour}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default TimeTable;