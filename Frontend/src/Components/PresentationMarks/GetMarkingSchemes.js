import jsPDF from "jspdf";
import "jspdf-autotable";

const generateMARKS = (specialization, totalMarks, criteria) => {
  const doc = new jsPDF();
  const spec = specialization;
  const total = totalMarks;

  const tableColumn = ["Number", "Criteria    ", "Marks Allocation", "Marks"];

  const tableRows = [];

  var no = 0;

  criteria.forEach((data) => {
    ++no;

    const Marks = [no, data.criteriaName, data.marksAllocation];

    tableRows.push(Marks);
  });

  var img = new Image();
  img.src =
    "https://res.cloudinary.com/donfmtaf4/image/upload/v1653761426/markingFinal_asud0m.png";
  doc.addImage(img, "png", 10, 10, 180, 42);

  // startY is basically margin-top
  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    headerStyles: {
      fillColor: [168, 168, 168],
      lineWidth: 0.1,
      lineColor: [0, 0, 0],
    },
    bodyStyles: {
      fillColor: [255, 255, 255],
      lineWidth: 0.1,
      lineColor: [0, 0, 0],
    },
    startY: 75,
  });

  doc.setFont("helvetica", "bold");

  // Received items title. and margin-top + margin-left
  doc.text(spec, 80, 50);
  // doc.setFont("times", "normal");
  doc.setFontSize(10);
  doc.text(`This markingScheme is for ${spec}.  `, 15, 60);
  doc.text(`This MarkingScheme carries ${total} marks.`, 15, 66);
  doc.text(
    `Note that the project will be evaluated individually  according to the below criteria.`,
    15,
    71
  );

  // we define the name of our PDF file.
  doc.save(`${spec}_MarkingScheme.pdf`);
};

export default generateMARKS;
