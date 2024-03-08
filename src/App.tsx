import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import "./App.css";
import DocPdf from "./components/DocPdf";
import { Modal } from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card flex gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-white hover:text-blue-800"
        >
          View PDF
        </button>
        <button>
          <PDFDownloadLink
            document={<DocPdf />}
            fileName="example.pdf"
            className="text-white"
          >
            {({ loading }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </button>
      </div>

      {open && <Modal open={open} onClose={() => setOpen(!open)} />}
    </>
  );
}

export default App;
