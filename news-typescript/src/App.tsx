
import styles from './App.module.scss'
import SearchComponent from './components/Filter/SearchComponent'
import Post from './components/Post/Post'

function App() {

  return (
    <div className={styles.main}>
      <SearchComponent/>
      <div className={styles.posts}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </div>
     
    </div>
  )
}

export default App
