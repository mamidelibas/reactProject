export default function Header() {
  return (
    <>
      <div className="">
        <div className="relative">
          <img
            className="rounded-b-xl w-full absolute"
            src="https://picsum.photos/1200/400"
          />
          <div
            className="absolute"
            style={{
              top: "10%",
            }}
          >
            <img className="rounded-full" src="https://picsum.photos/250/250" />
          </div>

          <div className="flex justify-around items-center w-full p-10 pl-32">
            <div>
              <h2 className="text-3xl text-purple-700 font-bold">
                Charles Doe
              </h2>
              <h4 className=" text-purple-700">UI/UX Designer</h4>
            </div>
            <div>
              <button className="bg-purple-700 text-white px-5 py-3 rounded-full">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
