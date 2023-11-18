//*
//* TAKİP ETME TAKİPTEN CIKMA SAYFASI
//*

import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function PopularProfileCard() {
  const [userData, setUserData] = useState([]);
  const currentUser = useSelector((state) => state.user);
  console.log(
    "reduxtan gelen giriş yapmış olan kullanıcı bilgisi",
    currentUser.user.lastname
  );

  // KULLANICILARI ÇEKME

  const getUserData = async () => {
    // kullanıcıları getir
    const response = await axios.get("http://localhost:3000/users/", {
      //aktif olan kullanıcı tokeni
      headers: {
        Authoorization: `Bearer ${localStorage.getItem("user_token")}`,
      },
    });

    setUserData(response.data.users);
  };

  // takip etme ve takipten cıkma fonksiyonu
  const followOrUnfollow = async (id) => {
    // id parametresi : takip edilecek olan kullanıcının ID değeridir.
    // currentUser.user._id ---> takip eden kullanıcının token değeridir.

    const serviceUrl = "http://localhost:3000/users/follow" + id;

    const response = await axios.get(
      serviceUrl,
      {},
      {
        headers: {
          Authoorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      }
    );

    if (response.status === 200) {
      getUserData();
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      {userData?.map((user) => {
        return (
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar alt="Remy Sharp" src={user.avatar} />
                <div>
                  <span className="text-lg font-semibold">
                    {user?.username}
                  </span>
                  <div className="flex gap-1 text-gray-400">
                    <span>{user.followerCount.length || 0} Followers</span>
                  </div>
                </div>
              </div>

              <div className="text-gray-400">
                {/* takip edip etmediğinin kontrolü */}
                {user.userFollowers.includes(currentUser.user._id) ? (
                  //takip ediyorsa
                  <button
                    className="bg-gray-400 text-white rounded-full px-3 py-1"
                    onClick={() => {
                      followOrUnfollow(user._id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  //takip etmiyorsa
                  <button
                    className="bg-rose-500 text-white rounded-full px-3 py-1"
                    onClick={() => {
                      followOrUnfollow(user._id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
