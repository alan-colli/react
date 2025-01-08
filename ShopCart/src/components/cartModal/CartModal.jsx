export default function CartModal({ handleCartModal }) {
  return (
    <div className="justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm flex fixed inset-0 w-[70vw] h-[100vh]  flex-col">
      <button onClick={handleCartModal}>CLOSE</button>
    </div>
  );
}
