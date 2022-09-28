// == Import
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Story from './Story';

// Style
import './styles.scss';

// == Component

  // const { slug } = useParams();

  const StoryList = () => {
    const stories = useSelector((state) => state.stories);

  // if (!storylist) {
  //   return <Navigate to="/error" replace />;
  // }
  return (
    <div className="history history-list">
      <div className="story">
        <p className="story story-subtitle">Veuillez choisir une histoire</p>
        {stories.map((story) => (
        <Story
          key={story.id}
          title={story.title}
          content={story.content}
          image={story.image}
        />
        ))}
        </div>
    </div>
  );
};

// == Export
export default StoryList;
