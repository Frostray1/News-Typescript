
import styles from './App.module.scss'
import SearchComponent from './components/Filter/SearchComponent'
import Post from './components/Post/Post'

function App() {

  return (
    <div className={styles.main}>
      <SearchComponent/>
      <Post/>
    </div>
  )
}

export default App
