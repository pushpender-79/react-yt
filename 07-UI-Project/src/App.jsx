import React from "react";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1663047305318-c6debe9f633c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      color: "red",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      color: "lightseagreen",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://media.istockphoto.com/id/1369922247/photo/young-woman-in-office-working-on-laptop-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=4f8iBcyuhrLTzZoa96RdIzw_PwSuBsYy-ywQoekUdrw=",
      color: "gray",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1669904021308-567d085a0ee7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      color: "black",
      intro: "",
      tag: "Underhacked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
