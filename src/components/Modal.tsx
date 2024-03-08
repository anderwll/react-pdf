import { PDFViewer } from "@react-pdf/renderer";
import DocPdf from "./DocPdf";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export function Modal({ open, onClose }: ModalProps) {
  return (
    <dialog
      open={open}
      className="absolute top-0 right-0 w-screen h-screen flex flex-col justify-center items-center"
    >
      <div className="w-[768px] h-[768px] bg-zinc-800 rounded relative z-50 p-12">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 bg-transparent"
        >
          X
        </button>

        <PDFViewer width="100%" height="100%" showToolbar className="rounded">
          <DocPdf />
        </PDFViewer>
      </div>
    </dialog>
  );
}
