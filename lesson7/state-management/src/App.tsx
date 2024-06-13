import { store } from './store'
import { Provider } from 'react-redux'
 import PostsComponent from './pages/posts'

function App() {

  return (
    <>
      <Provider store={store}>
        <div>
          <PostsComponent />
        </div>
      </Provider>
    </>
  )
}

export default App
