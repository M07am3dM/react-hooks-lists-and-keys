import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const users = [
  { id: 1, firstName: "Mohamed", lastName: "Matassi" },
  { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];

  const colorElements = colors.map(color => <li key={color} style={{color: color}}>{color}</li>);
  const userHeadings = users.map(user => <h2 key={user.id}>{user.firstName}{' '}{user.lastName} </h2>);

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      {userHeadings[0]}
      <ol>
        {colorElements} 
      </ol>
    </div>
  );
}

export default ColorList;
