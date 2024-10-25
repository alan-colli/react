export default function Users({ users }) {
  return (
    <div className="w-[50vw] h-[50vh] bg-white mt-14 rounded-lg">
      <h2 className="text-xl font-bold flex justify-center ">User List</h2>
      <ul className="list-disc pl-5">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} years old - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
