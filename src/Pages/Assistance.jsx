// import React, { useState } from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import "../../giphy.gif";
// import "../App.css";
// import "../../avatar.png";

// const Assistance = () => {
//   const [transcript, setTranscript] = useState("Click here to speak");
//   const { resetTranscript } = useSpeechRecognition();

//   const speak = (text) => {
//     const textSpeak = new SpeechSynthesisUtterance(text);
//     textSpeak.rate = 1;
//     textSpeak.volume = 1;
//     textSpeak.pitch = 1;
//     window.speechSynthesis.speak(textSpeak);
//   };

//   const wishMe = () => {
//     const hour = new Date().getHours();
//     if (hour >= 0 && hour < 12) {
//       speak("Good Morning Boss...");
//     } else if (hour >= 12 && hour < 17) {
//       speak("Good Afternoon Master...");
//     } else {
//       speak("Good Evening Sir...");
//     }
//   };

//   const takeCommand = (message) => {
//     if (message.includes("hey") || message.includes("hello")) {
//       speak("Hello Sir, How May I Help You?");
//     } else if (message.includes("open google")) {
//       window.open("https://google.com", "_blank");
//       speak("Opening Google...");
//     } else if (message.includes("open youtube")) {
//       window.open("https://youtube.com", "_blank");
//       speak("Opening Youtube...");
//     } else if (message.includes("open facebook")) {
//       window.open("https://facebook.com", "_blank");
//       speak("Opening Facebook...");
//     } else if (
//       message.includes("what is") ||
//       message.includes("who is") ||
//       message.includes("what are")
//     ) {
//       window.open(
//         `https://www.google.com/search?q=${message.replace(" ", "+")}`,
//         "_blank"
//       );
//       const finalText = "This is what i found on internet regarding " + message;
//       speak(finalText);
//     } else if (message.includes("wikipedia")) {
//       window.open(
//         `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
//         "_blank"
//       );
//       const finalText =
//         "This is what i found on wikipedia regarding " + message;
//       speak(finalText);
//     } else if (message.includes("time")) {
//       const time = new Date().toLocaleString(undefined, {
//         hour: "numeric",
//         minute: "numeric",
//       });
//       const finalText = time;
//       speak(finalText);
//     } else if (message.includes("date")) {
//       const date = new Date().toLocaleString(undefined, {
//         month: "short",
//         day: "numeric",
//       });
//       const finalText = date;
//       speak(finalText);
//     } else if (message.includes("calculator")) {
//       window.open("Calculator:///");
//       const finalText = "Opening Calculator";
//       speak(finalText);
//     } else {
//       window.open(
//         `https://www.google.com/search?q=${message.replace(" ", "+")}`,
//         "_blank"
//       );
//       const finalText =
//         "I found some information for " + message + " on google";
//       speak(finalText);
//     }
//   };

//   const handleButtonClick = () => {
//     resetTranscript();
//     speak("Listening....");
//     SpeechRecognition.startListening({ continuous: true });
//   };

//   return (
//     <section className="main">
//       <div className="image-container">
//         <div className="image">
//           <img src="giphy.gif" alt="image" />
//         </div>
//         <h1>J A R V I S</h1>
//         <p>I'm a Virtual Assistant Assistance, How may I help you?</p>
//       </div>
//       <div className="input">
//         <button className="talk" onClick={handleButtonClick}>
//           <i className="fas fa-microphone-alt"></i>
//         </button>
//         <h1 className="content">{transcript}</h1>
//       </div>
//     </section>
//   );
// };

// export default Assistance;
