export default function LoginPage() {
  return (
    <div className="min-h-screen w-[100vw] flex flex-col items-center justify-center">
      <div className=" min-h-screen  flex">
        <form className="bg-gray-200 w-[80vw] h-[40vh]">
          <div>
            <p>Username:</p>
            <input type="text" />
          </div>
          <div>
            <p>Password:</p>
            <input type="password" />
          </div>
          <div>
            <p>Register</p>
          </div>
        </form>
      </div>
    </div>
  );
}
