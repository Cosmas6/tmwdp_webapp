//   if (newPop <= 1000000) {
//   transaction.update(DeptDocRef, { damTally: newPop });
//   return newPop;
// } else {
//   return Promise.reject("Sorry! Population is too big");
// }

//   $breakpoints: (
//     'phone': 320px,
//     'tablet': 768px,
//     'desktop': 1024px
//   ) !default;

// domtoimage.toPng(reportRef.current).then((dataUrl) => {
// });

// const doc = new jsPDF();
// doc.addImage(dataUrl, "PNG", 0, 0);
// doc.internal.scaleFactor = 1.33;
// doc.save(date);
// var pdf = doc.output("datauristring");

// fetch("https://v2018.api2pdf.com/chrome/html", {
//   method: "post",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     Authorization: "e11aaf91-5cf3-4c53-958a-a3304484ea8e", //Get your API key from https://portal.api2pdf.com
//   },
//   body: JSON.stringify({
//     html: reportRef.current,
//     inlinePdf: true,
//     fileName: "test.pdf",
//   }),
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res.pdf));

// domtoimage
//   .toPng(reportRef.current)
//   .then((dataUrl) => {
//     const doc = new jsPDF();
//     doc.addImage(dataUrl, "PNG", 0, 0);
//     doc.internal.scaleFactor = 1.33;
//     doc.save(date);
//     var pdf = doc.output("datauristring");
//     axios.post("http://localhost:4000/multer", pdf).then((res) => {
//       // then print response status
//       console.log(res.statusText);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   import domtoimage from "dom-to-image";
// import jsPDF from "jspdf";
// import axios from "axios";


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://cosmas:<password>@tmwdp.hbt0i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

