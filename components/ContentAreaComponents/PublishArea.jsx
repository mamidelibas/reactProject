import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import VideocamIcon from "@mui/icons-material/Videocam";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

export default function PublishArea() {
  return (
    <div className="border-2 rounded-lg">
      <div className="p-3">
        <input
          type="text"
          placeholder="What are you publish?"
          className="w-full py-3 px-2"
        />
      </div>

      <div className="flex justify-between p-3 items-center border-t-2">
        <div className="flex gap-5">
          <ControlPointOutlinedIcon
            style={{
              color: "gray",
              fontSize: "1.7rem",
            }}
          />
          <PhotoCameraBackIcon
            style={{
              color: "gray",
              fontSize: "1.7rem",
            }}
          />
          <VideocamIcon
            style={{
              color: "gray",
              fontSize: "1.7rem",
            }}
          />
          <InsertLinkIcon
            style={{
              color: "gray",
              fontSize: "1.7rem",
            }}
          />
        </div>

        <div>
          <button className="border-2 px-4 py-1 rounded-full mr-3">
            Draft
          </button>
          <button className="bg-rose-500 px-4 py-1 rounded-full">
            Post Now
          </button>
        </div>
      </div>
    </div>
  );
}
