import React, { useState } from "react";

const initialForm = {
  goal: "",
  by: "",
};
const GoalForm = ({ allGoals, setAllGoals }) => {
  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllGoals([
      ...allGoals,
      <li key={allGoals.length + 1}>
        My goal is to {formData.goal}, by {formData.by}.
      </li>,
    ]);
    setFormData(initialForm);
  };

  return (
    <>
      <h1>My Goals</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="goal"
          placeholder="Goal..."
          value={formData.goal}
          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={(e) => setFormData({ ...formData, by: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default GoalForm;
