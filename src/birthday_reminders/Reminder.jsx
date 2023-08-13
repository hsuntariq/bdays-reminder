import React, { useState } from "react";
import SingleBirthday from "./SingleBirthday";
import { data } from "./data";

const Reminder = () => {
  const [people, setPeople] = useState(data);
  const removeAll = () => {
    setPeople([]);
  };
  const restoreAll = () => {
    setPeople(data);
  };

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);

    setPeople(newPeople);
  };

  return (
    <>
      <div className="container col-lg-6 m-auto card p-4">
        <h1 className="display-1 text-center p-3">
          {people.length} birthdays today
        </h1>
        {people.map((birthdays) => {
          return (
            <SingleBirthday
              key={birthdays.id}
              {...birthdays}
              rem={removePerson}
            />
          );
        })}
        <div onClick={removeAll} className="my-2 btn btn-dark">
          Remove All
        </div>
        <div onClick={restoreAll} className="my-2 btn btn-success">
          Refresh
        </div>
      </div>
    </>
  );
};

export default Reminder;
