export default function Input({ label, textarea, ...props }) {
  return (
    <p className="text-black m-2">
      <label className="my-1">{label}</label>
      {textarea ? (
        <textarea className="rounded-md" {...props} />
      ) : (
        <input className="rounded-md" {...props} />
      )}
    </p>
  );
}
