import PublishArea from "./ContentAreaComponents/PublishArea";
import PostCard from "./ContentAreaComponents/PostCard";
import { useState, useEffect } from "react";
import axios from "axios";
import {dateFormatter} from '@/utils/dateFormatter';
import { useSelector, useDispatch } from "react-redux";

export default function ContentArea() {

  const [contentData, setContentData] = useState([]);
  const dispatch = useDispatch();
  const contentPing = useSelector((state) => state.contentPing.renew)

  useEffect(() => {
    const getContents = async () => {
      try{
       const response = await axios.get('http://localhost:3000/publications/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`
        }
       })

       if(response.status === 200){
          setContentData(response.data.publications);
          dispatch({
            type: 'REFETCH_CONTENT',
            payload: false
          })
       }
      }
      catch(error){
        console.log(error);
      }
    }

    if(contentPing){
      getContents();
    }
  }, [contentPing]);


  useEffect(() => {
    const getContents = async () => {
      try{
       const response = await axios.get('http://localhost:3000/publications/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`
        }
       })

       if(response.status === 200){
          setContentData(response.data.publications);
       }
      }
      catch(error){
        console.log(error);
      }
    }

    getContents();
  }, []);

  return (
    <div>
      <PublishArea />
      {contentData?.map((content) => {
        return (
          <PostCard
            avatar='C'
            fullname={content.user[0].name + ' ' + content.user[0].lastname}
            username={content.user[0].username}
            createdOn={dateFormatter(content.createdAt)}
            content={content.content}
            likeCount={content.likes.lenth || 0}
            commentCount={0}
          />
        );
      })}
    </div>
  );
}
