// // import React from 'react'
// // const MainDisplay = () => {
// //   const [showPage, setShowPage] = useState(true);
// //   const handleTimeout = () => {
// //     setShowPage(false);
// //   };

// export function SphereBackground({ className }) {
//   return (
//     <Canvas className={className}>
//       <ambientLight intensity={0.1} />
//       <Pointer />
//     </Canvas>
//   );
// }

// export function Timer({ duration, onTimeout }) {
//   const [timeLeft, setTimeLeft] = useState(duration);

//   useEffect(() => {
//     if (timeLeft <= 0) {
//       onTimeout();
//       return;
//     }

//     const intervalId = setInterval(() => {
//       setTimeLeft(timeLeft - 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timeLeft, onTimeout]);
// }


// //   return (
// //     <>
// //       {showPage ? (
// //         <div className="relative h-screen w-screen overflow-hidden bg-black">
// //           <SphereBackground className="absolute inset-0 z-0" />
// //           <Timer duration={10} onTimeout={handleTimeout} />
// //           <div className="flex justify-center items-center text-white text-6xl font-bold tracking-widest h-full w-full absolute z-10">
// //             Welcome
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="relative h-screen w-screen overflow-hidden bg-black">
// //           <div className="flex justify-center items-center text-white text-6xl font-bold tracking-widest h-full w-full absolute z-10">
// //             Welcome
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default SeconD;
