import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Toggle } from "../ui/toggle";
import { 
  BookmarkSvg, 
  BookmarkFilledSvg, 
  FavoriteSvg, 
  FavoriteFilledSvg,
  StarSvg,
  StarFilledSvg 
} from "../../assets/icons/svg";

// Using an icon from your icon set - let's use a bookmark-like icon
const BookmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Toggle variant',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Toggle size',
    },
    pressed: {
      control: 'boolean',
      description: 'Whether the toggle is pressed',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;

export const Default: StoryFn<typeof Toggle> = () => {
  const [pressed, setPressed] = React.useState(false);

  return (
    <Toggle variant="outline" pressed={pressed} onPressedChange={setPressed}>
      {pressed ? (
        <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
      ) : (
        <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
      )}
      {pressed ? "ATM Saved" : "Save ATM"}
    </Toggle>
  );
};

export const AllSizes: StoryFn = () => {
  const [small, setSmall] = React.useState(false);
  const [defaultSize, setDefaultSize] = React.useState(false);
  const [large, setLarge] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <Toggle size="sm" variant="outline" pressed={small} onPressedChange={setSmall}>
        {small ? (
          <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
        ) : (
          <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
        )}
        {small ? "ATM Saved" : "Save ATM"}
      </Toggle>
      <Toggle size="default" variant="outline" pressed={defaultSize} onPressedChange={setDefaultSize}>
        {defaultSize ? (
          <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
        ) : (
          <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
        )}
        {defaultSize ? "ATM Saved" : "Save ATM"}
      </Toggle>
      <Toggle size="lg" variant="outline" pressed={large} onPressedChange={setLarge}>
        {large ? (
          <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
        ) : (
          <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
        )}
        {large ? "ATM Saved" : "Save ATM"}
      </Toggle>
    </div>
  );
};

export const AllVariants: StoryFn = () => {
  const [defaultVar, setDefaultVar] = React.useState(false);
  const [outlineVar, setOutlineVar] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <Toggle variant="default" className="gap-2" pressed={defaultVar} onPressedChange={setDefaultVar}>
        {defaultVar ? (
          <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
        ) : (
          <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
        )}
        {defaultVar ? "ATM Saved" : "Save ATM"}
      </Toggle>
      <Toggle variant="outline" className="gap-2" pressed={outlineVar} onPressedChange={setOutlineVar}>
        {outlineVar ? (
          <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
        ) : (
          <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
        )}
        {outlineVar ? "ATM Saved" : "Save ATM"}
      </Toggle>
    </div>
  );
};

export const WithDifferentIcons: StoryFn = () => {
  const [bookmarked, setBookmarked] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [starred, setStarred] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <Toggle variant="outline" size="sm" pressed={bookmarked} onPressedChange={setBookmarked}>
        {bookmarked ? (
          <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
        ) : (
          <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
        )}
        {bookmarked ? "Bookmarked" : "Bookmark"}
      </Toggle>
      <Toggle variant="outline" size="sm" pressed={liked} onPressedChange={setLiked}>
        {liked ? (
          <img src={FavoriteFilledSvg} alt="Favorite filled" className="w-4 h-4" />
        ) : (
          <img src={FavoriteSvg} alt="Favorite" className="w-4 h-4" />
        )}
        {liked ? "Liked" : "Like"}
      </Toggle>
      <Toggle variant="outline" size="sm" pressed={starred} onPressedChange={setStarred}>
        {starred ? (
          <img src={StarFilledSvg} alt="Star filled" className="w-4 h-4" />
        ) : (
          <img src={StarSvg} alt="Star" className="w-4 h-4" />
        )}
        {starred ? "Starred" : "Star"}
      </Toggle>
    </div>
  );
};

export const InteractiveDemo: StoryFn = () => {
  const [bookmarked, setBookmarked] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [starred, setStarred] = React.useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Interactive Toggle Demo</h3>
        <div className="flex items-center gap-4">
          <Toggle
            variant="outline"
            size="sm"
            pressed={bookmarked}
            onPressedChange={setBookmarked}
          >
            {bookmarked ? (
              <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
            ) : (
              <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
            )}
            {bookmarked ? "ATM Saved" : "Save ATM"}
          </Toggle>
          
          <Toggle
            variant="outline"
            size="sm"
            pressed={liked}
            onPressedChange={setLiked}
          >
            {liked ? (
              <img src={FavoriteFilledSvg} alt="Favorite filled" className="w-4 h-4" />
            ) : (
              <img src={FavoriteSvg} alt="Favorite" className="w-4 h-4" />
            )}
            {liked ? "Liked" : "Like"}
          </Toggle>
          
          <Toggle
            variant="outline"
            size="sm"
            pressed={starred}
            onPressedChange={setStarred}
          >
            {starred ? (
              <img src={StarFilledSvg} alt="Star filled" className="w-4 h-4" />
            ) : (
              <img src={StarSvg} alt="Star" className="w-4 h-4" />
            )}
            {starred ? "Starred" : "Star"}
          </Toggle>
        </div>
      </div>
      
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h4 className="font-medium mb-2">Current State:</h4>
        <ul className="text-sm space-y-1">
          <li>Bookmarked: {bookmarked ? 'Yes' : 'No'}</li>
          <li>Liked: {liked ? 'Yes' : 'No'}</li>
          <li>Starred: {starred ? 'Yes' : 'No'}</li>
        </ul>
      </div>
    </div>
  );
};

export const States: StoryFn = () => {
  const [normal, setNormal] = React.useState(false);
  const [pressed, setPressed] = React.useState(true);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Normal</h3>
        <Toggle variant="outline" size="sm" pressed={normal} onPressedChange={setNormal}>
          {normal ? (
            <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
          ) : (
            <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
          )}
          {normal ? "ATM Saved" : "Save ATM"}
        </Toggle>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Pressed</h3>
        <Toggle variant="outline" size="sm" pressed={pressed} onPressedChange={setPressed}>
          {pressed ? (
            <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
          ) : (
            <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
          )}
          {pressed ? "ATM Saved" : "Save ATM"}
        </Toggle>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Disabled</h3>
        <Toggle variant="outline" size="sm" disabled pressed={false}>
          <img src={BookmarkSvg} alt="Bookmark" className="w-4 h-4" />
          Save ATM
        </Toggle>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Disabled & Pressed</h3>
        <Toggle variant="outline" size="sm" disabled pressed>
          <img src={BookmarkFilledSvg} alt="Bookmark filled" className="w-4 h-4" />
          ATM Saved
        </Toggle>
      </div>
    </div>
  );
};

