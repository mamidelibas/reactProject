import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function PostCard({
  avatar,
  fullname,
  username,
  createdOn,
  content,
  likeCount,
  commentCount,
  likes,
  contentId,
}) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  //*
  //* BEĞENİ BUTONUNU AKTİFLEŞTİRME VERİLERİNİ ÇEKME
  //*

  const likeContent = async (contentId) => {
    const serviceUrl = "http://localhost:3000/publications/action/" + contentId;
    axios
      .post(
        serviceUrl,
        {
          action: "like",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: "REFETCH_CONTENT",
            payload: true,
          });
        }
      });
  };

  return (
    <>
      <div className="mt-10 flex flex-col gap-5 pb-10 border-b-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Avatar alt="Remy Sharp" src={avatar} />
            <div>
              <span className="text-lg font-semibold">{fullname}</span>
              <div className="flex gap-1 text-gray-400">
                <span>@{username}</span>
                <span>•</span>
                <span>{createdOn}</span>
              </div>
            </div>
          </div>

          <div className="text-gray-400">
            <MoreVertIcon />
          </div>
        </div>

        <div>
          <p>{content}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-10">
            {likes?.includes(currentUser.user._id) ? (
              <button
                className="text-rose-500"
                onClick={() => likeContent(contentId)}
              >
                <FavoriteIcon />
                <span className="ml-2">{likes?.length || 0}</span>
              </button>
            ) : (
              <button
                className="text-rose-500"
                onClick={() => likeContent(contentId)}
              >
                <FavoriteBorderIcon />
                <span className="ml-2">{likes?.length || 0}</span>
              </button>
            )}
            {/* <button className="text-rose-500">
              <FavoriteIcon />
              <span className="ml-2">{likeCount}</span>
            </button> */}
            <div className="text-gray-400">
              <TextsmsOutlinedIcon />
              <span className="ml-2">{commentCount}</span>
            </div>
          </div>
          <div className="text-gray-400">
            <SendOutlinedIcon />
            <span className="ml-2">Share</span>
          </div>
        </div>
      </div>
    </>
  );
}
