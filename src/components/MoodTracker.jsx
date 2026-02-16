// import React, { useState } from "react";
// import { useWeather } from "../context/Weather";

// const MoodTracker = () => {
//   const { data } = useWeather();
//   const [mood, setMood] = useState("");
//   const [journal, setJournal] = useState(
//     JSON.parse(localStorage.getItem("moodJournal")) || []
//   );

//   const moods = ["😊", "😐", "😔", "😎", "😴"];

//   const handleSaveMood = () => {
//     if (!data || !data.location) {
//       alert("Search a city first!");
//       return;
//     }
//     if (!mood) {
//       alert("Please select a mood!");
//       return;
//     }

//     const entry = {
//       date: new Date().toLocaleDateString(),
//       city: data.location.name,
//       temp: data.current.temp_c,
//       desc: data.current.condition.text,
//       mood,
//     };

//     const updated = [...journal, entry];
//     setJournal(updated);
//     localStorage.setItem("moodJournal", JSON.stringify(updated));
//     setMood("");
//   };

  
//   const handleClearJournal = () => {
//     if (window.confirm("Are you sure you want to delete all journal entries?")) {
//       localStorage.removeItem("moodJournal");
//       setJournal([]);
//     }
//   };

//   return (
//     <div className="bg-white p-5 mt-10 rounded-2xl shadow-lg w-full max-w-md mx-auto border border-blue-100">
//       <h2 className="text-2xl font-semibold text-blue-700 mb-2 text-center">
//         Mood Tracker
//       </h2>
//       <p className="text-gray-600 mb-4 text-center">
//         How do you feel in this weather?
//       </p>

//       <div className="flex justify-center gap-4 mb-4">
//         {moods.map((m) => (
//           <button
//             key={m}
//             onClick={() => setMood(m)}
//             className={`text-3xl transition transform hover:scale-125 ${
//               mood === m ? "scale-125 text-blue-600" : "text-gray-500"
//             }`}
//           >
//             {m}
//           </button>
//         ))}
//       </div>

//       <button
//         onClick={handleSaveMood}
//         className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 
//                    shadow-md transition hover:scale-105 w-full mb-3"
//       >
//         Save Mood
//       </button>

//       {journal.length > 0 && (
//         <div className="mt-6 text-left">
//           <div className="flex justify-between items-center mb-2">
//             <h3 className="font-semibold text-blue-700 text-center w-full">
//              Journal Entries
//             </h3>
//           </div>

//           <ul className="space-y-2 max-h-48 overflow-y-auto">
//             {journal.map((entry, i) => (
//               <li
//                 key={i}
//                 className="bg-blue-50 p-3 rounded-lg flex justify-between items-center shadow-sm"
//               >
//                 <div>
//                   <p className="text-sm font-medium text-blue-800">{entry.date}</p>
//                   <p className="text-xs text-gray-600">
//                     {entry.city} • {entry.desc} • {entry.temp}°C
//                   </p>
//                 </div>
//                 <span className="text-2xl">{entry.mood}</span>
//               </li>
//             ))}
//           </ul>

//           <button
//             onClick={handleClearJournal}
//             className="mt-4 bg-red-500 text-white w-full py-2 rounded-xl hover:bg-red-600 
//                        transition shadow-sm"
//           >
//             Clear Journal
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MoodTracker;
