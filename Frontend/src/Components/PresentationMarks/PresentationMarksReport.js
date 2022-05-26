import jsPDF from "jspdf";
import "jspdf-autotable";

const generateMARKS = (PresentationMarks) => {
  const doc = new jsPDF();

  const tableColumn = ["projectId", "totalMarks"];

  const tableRows = [];

  PresentationMarks.forEach((PresentationMarks) => {
    const Marks = [PresentationMarks.projectId, PresentationMarks.totalMarks];

    tableRows.push(Marks);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });

  // Received items title. and margin-top + margin-left
  doc.text("Presentation Marks ", 14, 15);

  // we define the name of our PDF file.
  doc.save(`Presentation_Marks.pdf`);
};

export default generateMARKS;
