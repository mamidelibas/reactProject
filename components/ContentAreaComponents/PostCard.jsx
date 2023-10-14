import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import SendIcon from "@mui/icons-material/Send";

export default function PostCard({
  avatar,
  userfullname,
  username,
  createdOn,
  content,
  likeCount,
  commentCount,
}) {
  return (
    <div className="mt-10 flex flex-col gap-5 border-b-2 pb-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Avatar alt="Remy Sharp" avatar={avatar} />
          <div>
            <span>{username}</span>
            <div className="flex gap-1">
              <span>{userfullname}</span>
              <span> - </span>
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
            <span>{likeCount}</span>
          </div>
          <div className="text-gray-400">
            <TextsmsOutlinedIcon />
            <span>{commentCount}</span>
          </div>
        </div>
        <div className="text-gray-400">
          <SendIcon />
          <span> Share</span>
        </div>
      </div>
    </div>
  );
}
