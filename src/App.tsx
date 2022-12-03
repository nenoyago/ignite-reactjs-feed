import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      name: 'Yago Neno',
      avatarUrl: 'https://github.com/nenoyago.png',
      role: 'Fullstack Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'Educator @Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-05-08 20:00:00'),
  },
  {
    id: 3,
    author: {
      name: 'Mayk Brito',
      avatarUrl: 'https://github.com/maykbrito.png',
      role: 'Educator @Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: `Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`,
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.length > 0 &&
            posts.map(({ id, author, content, publishedAt }) => (
              <Post
                key={id}
                author={author}
                content={content}
                publishedAt={publishedAt}
              />
            ))}
        </main>
      </div>
    </div>
  );
}

export default App;
