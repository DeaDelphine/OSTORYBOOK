// == Import

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Story from './Story';

import Loading from '../App/Loading';

import { fetchStories } from '../../actions/stories';

// Style
import './styles.scss';

// == Component

function StoryList() {
  const stories = useSelector((state) => state.stories.stories);
  const dispatch = useDispatch();

  // const storiesLoaded = useSelector((state) => state.stories.storiesLoaded);

  useEffect(() => {
    dispatch(fetchStories());
  }, []);
  // if (!storiesLoaded) {
  //   return <Loading />;
  // }

  return (
    <div className="container">
      <div className="story-list">
        <p className="story-subtitle">Veuillez choisir une histoire</p>
        <div className="story-list__list">
          <div className="scrollbar">
            {stories.map((story) => (
              <Story {...story} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default StoryList;
