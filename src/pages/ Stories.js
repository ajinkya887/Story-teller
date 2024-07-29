import React from 'react';
import { Link } from 'react-router-dom';

function Stories() {
  // Mock data, replace with actual data fetching
  const stories = [
    { id: 1, title: 'Story 1' },
    { id: 2, title: 'Story 2' },
    { id: 3, title: 'Story 3' },
  ];

  return (
    <div>
      <h1>All Stories</h1>
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            <Link to={`/story/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stories;