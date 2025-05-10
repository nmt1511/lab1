import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import AppNavigator from './routes';
import store from './store';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
}