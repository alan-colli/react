export default function Input({ label, textarea, ...props }) {
  return (
    <div className="text-black m-2">
      <label className="my-1 text-white flex ">{label}</label>
      {textarea ? (
        <textarea className="rounded-md" {...props} />
      ) : (
        <input className="rounded-md" {...props} />
      )}
    </div>
  );
}
