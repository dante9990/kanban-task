import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

const dataMock = [
  {
    title: 'backlog',
    issues: [
      {
        id: '1',
        name: 'Shop page – performance issues',
        description: 'Fix all the bugs'
      },
      {
        id: '5',
        name: 'dsdfas',
        description: 'Fix all the bugs'
      }
    ]
  },
  {
    title: 'ready',
    issues: [
      {
        id: '2',
        name: 'Sprint bugfix',
        description: 'Fix all the bugs'
      }
    ]
  },
  {
    title: 'in progress',
    issues: [
      {
        id: '3',
        name: 'Sprint bugfix',
        description: 'Fix all the bugs'
      },
      {
        id: '7',
        name: 'Scvbhgj',
        description: 'Fix all the bugs'
      }
    ]
  },
  {
    title: 'finished',
    issues: [
      {
        id: '4',
        name: 'Sprint bugfix',
        description: 'Fix all the bugs'
      },
      {
        id: '6',
        name: 'Sprint bugfix',
        description: 'Fix all the bugs'
      }
    ]
  },
]

function App() {

  const [tasks, setTasks] = useState(dataMock)
  
  return (
    <div className="App">
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
