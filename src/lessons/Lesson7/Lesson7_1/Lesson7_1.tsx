import { type MouseEvent, useState, useTransition } from 'react';
import AboutTab from './AboutTab';
import ContactTab from './ContactTab';
import PostsTab from './PostsTab';
import TabButton from './TabButton';

const ABOUT = 'about';
const POSTS = 'posts';
const CONTACT = 'contact';

export default function Lesson7_1() {
  const [tab, setTab] = useState('about');
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab: string) => startTransition(() => setTab(nextTab));

  return (
    <div className="ml-8 text-lg">
      <div className="flex gap-4 items-center">
        <TabButton
          id={ABOUT}
          isActive={tab === ABOUT}
          onClick={(e: MouseEvent<HTMLButtonElement>) => selectTab(e.currentTarget.id)}
        >
          {ABOUT}
        </TabButton>
        <TabButton
          id={POSTS}
          isActive={tab === POSTS}
          onClick={(e: MouseEvent<HTMLButtonElement>) => selectTab(e.currentTarget.id)}
        >
          {POSTS}
        </TabButton>
        <TabButton
          id={CONTACT}
          isActive={tab === CONTACT}
          onClick={(e: MouseEvent<HTMLButtonElement>) => selectTab(e.currentTarget.id)}
        >
          {CONTACT}
        </TabButton>
      </div>
      <div className="border-t mt-2">
        {tab === ABOUT && <AboutTab />}
        {tab === POSTS && <PostsTab />}
        {tab === CONTACT && <ContactTab />}
      </div>
    </div>
  );
}
