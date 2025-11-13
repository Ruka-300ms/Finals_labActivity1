import React from 'react';

function PersonalInfo() {
  return (
    <section className="cardPInfo">
      <h2>Personal Information</h2>
      <ul>
        <li>Email: andreipellana.com</li>
        <li>Academic Status: Student</li>
        <li>Phone: (123) 452-123344</li>
        <li>LinkedIn: <a href="dummylink">linkedin.com/in/ruka300ms</a></li>
      </ul>
      <button onClick={() => window.location.href = 'mailto:ruka300ms@gmail.com'}>Click for more information</button>
    </section>
  );
}

export default PersonalInfo;
