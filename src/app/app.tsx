import { Provider as UsersProvider } from 'jotai';
import './app.module.css';
import Layout from './features/layout/Layout';
import RouterDOM from './router/RouterDOM';

export function App() {
  return (
    <div>
      <UsersProvider>
        <Layout>
          <RouterDOM />
        </Layout>
      </UsersProvider>
    </div>
  );
}

export default App;
