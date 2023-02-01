import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import {
  Navbar,
  Feed,
  SearchFeed,
  ChannelDetails,
  VideoDetails,
  BackToTop,
  Footer,
} from "./components";

function App() {
  const [loading, setisLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  const [mode, setMode] = useState(true);
  // let students = [
  //   { name: "kingsley", gender: "male" },
  //   { name: "femi", gender: "male" },
  //   { name: "taye", gender: "female" },
  //   { name: "ola", gender: "male" },
  //   { name: "hellen", gender: "female" },
  //   { name: "ife", gender: "female" },
  //   { name: "glory", gender: "female" },
  //   { name: "peter", gender: "male" },
  //   { name: "faith", gender: "female" },
  //   { name: "kingsley", gender: "male" },
  // ];

  // let maleStudents = students.filter((student) => student.gender == "male");
  // var start, end;
  // var numbers;

  // const answer = (numbers) => {
  //   if (numbers.length % 2 == 0) {
  //     start = numbers.length - (numbers.length / 2 + 1);
  //     end = numbers.length - (numbers.length / 2 - 1);
  //     console.log("running");
  //     return numbers.slice(start, end);
  //   } else {
  //     console.log("ran");
  //     return numbers[Math.floor(numbers.length / 2)];
  //   }
  // };

  // console.log(
  //   answer(["kingsley ", "peter", "james", "kings", "hellen", "john"])
  // );

  // var middle = numbers.slice(start, end);
  // console.log(oddmiddle);
  // var person = { name: "gaga", age: 90, isProgrammer: true };
  // Object.keys(person);
  // Object.values(person);
  // Object.values(person);
  // console.log(
  //   Object.values(person),

  //   Object.keys(person)
  // );
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setisLoading(false);
    }, 6000);
  }

  return (
    !loading && (
      <BrowserRouter>
        <Box
          sx={{
            backgroundColor: mode ? "rgb(248,249,255)" : "#000",
          }}
        >
          <Navbar mode={mode} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Feed mode={mode} setMode={setMode} />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/Channel/:id" element={<ChannelDetails />} />
            <Route
              path="/search/:searchTerm"
              element={<SearchFeed mode={mode} />}
            />
          </Routes>
          <BackToTop mode={mode} />
          <Footer mode={mode} />
        </Box>
      </BrowserRouter>
    )
  );
}

export default App;
