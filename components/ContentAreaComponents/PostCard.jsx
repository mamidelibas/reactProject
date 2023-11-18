import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

export default function PostCard({
  avatar,
  fullname,
  username,
  createdOn,
  content,
  likeCount,
  commentCount,
}) {
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
            <div className="text-rose-500">
              <FavoriteIcon />
              <span className="ml-2">{likeCount}</span>
            </div>

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
