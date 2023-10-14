import PostCard from "./ContentAreaComponents/PostCard";
import PublishArea from "./ContentAreaComponents/PublishArea";

const contentData = [
  {
    username: "Jhon_stim",
    userfullname: "Jhones Stim",
    createdOn: "1 Hours ago",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, error.",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    likeCount: "1.8k",
    commentCount: "1.1k",
  },
  {
    username: "canberk_berem",
    userfullname: "Canberk Beren",
    createdOn: "3 Hours ago",
    content: "lorem ipsum dolar dolar dolar dolar",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    likeCount: "1.2k",
    commentCount: "1.3k",
  },
  {
    username: "mami_delibas",
    userfullname: "Muhammet Delibaş",
    createdOn: "2 Hours ago",
    content: "lorem ipsum dolar dolar dolar dolar dolar",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
    likeCount: "1.7k",
    commentCount: "1.6k",
  },
];

export default function ContentArea() {
  return (
    <div>
      <PublishArea />
      {contentData.map((content) => {
        return (
          <PostCard
            username={content.username}
            userfullname={content.userfullname}
            createdOn={content.createdOn}
            content={content.content}
            avatar={content.avatar}
            likeCount={content.likeCount}
            commentCount={content.commentCount}
          />
        );
      })}
    </div>
  );
}
