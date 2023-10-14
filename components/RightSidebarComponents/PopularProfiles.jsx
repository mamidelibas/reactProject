import Avatar from "@mui/material/Avatar";

export default function PopularProfileCard() {
  const userData = [
    {
      avatar: "https://mui.com/static/images/avatar/1.jpg",
      fullname: "Muhammet Delibaş",
      followerCount: "102.3K Followers",
    },
    {
      avatar: "https://mui.com/static/images/avatar/2.jpg",
      fullname: "Muhammet Delibaş",
      followerCount: "102.3K Followers",
    },
    {
      avatar: "https://mui.com/static/images/avatar/3.jpg",
      fullname: "Muhammet Delibaş",
      followerCount: "102.3K Followers",
    },
    {
      avatar: "https://mui.com/static/images/avatar/4.jpg",
      fullname: "Muhammet Delibaş",
      followerCount: "102.3K Followers",
    },
    {
      avatar: "https://mui.com/static/images/avatar/5.jpg",
      fullname: "Muhammet Delibaş",
      followerCount: "102.3K Followers",
    },
  ];

  return (
    <>
      {userData.map((user) => {
        return (
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar alt="Remy Sharp" src={user.avatar} />
                <div>
                  <span className="font-bold">{user.fullname}</span>
                  <div className="flex gap-1">
                    <span className="text-gray-500">{user.followerCount}</span>
                  </div>
                </div>
              </div>

              <div className="text-gray-400">
                <button className="bg-rose-500 px-3 py-2 rounded-full text-white">
                  Follow
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
