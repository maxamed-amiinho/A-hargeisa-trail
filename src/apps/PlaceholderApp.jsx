export default function PlaceholderApp({ onBack }) {
  return (
    <div className="flex flex-col h-full bg-base items-center justify-center px-8">
      <p className="text-[14px] text-inkfaint">Nothing here yet.</p>
      <button onClick={onBack} className="mt-6 text-[14px] text-gold font-medium">
        Close
      </button>
    </div>
  );
}
