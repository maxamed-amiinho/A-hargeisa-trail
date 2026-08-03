import { X } from "lucide-react";

const DOCS = [
  { id: "doc-1", title: "land_deal_notes.docx", preview: "Draft notes on the construction contract..." },
  { id: "doc-2", title: "sources_list.docx", preview: "Contacts willing to speak on record..." },
];

export default function DocsApp({ onBack }) {
  return (
    <div className="flex flex-col h-full bg-base">
      <div className="flex items-center justify-between px-4 pt-3 pb-3 border-b border-panel">
        <span className="text-[15px] font-semibold text-ink">Documents</span>
        <button onClick={onBack} aria-label="Close">
          <X size={18} className="text-ink" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {DOCS.map((d) => (
          <button
            key={d.id}
            className="w-full text-left px-4 py-3 border-b border-panelmute active:bg-[#141917]"
          >
            <span className="text-[14px] font-medium text-ink block">{d.title}</span>
            <p className="text-[12px] text-inkfaint truncate mt-0.5">{d.preview}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
