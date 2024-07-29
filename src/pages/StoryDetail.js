import React from 'react';
import { useParams } from 'react-router-dom';

function StoryDetail() {
  const { id } = useParams();

  // Mock data, replace with actual data fetching
  const story = {
    id: id,
    title: `Story ${id}`,
    content: 'This is the story content...',
  };

  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.content}</p>
      {/* Add interactive elements here */}
    </div>
  );
}

export default StoryDetail;