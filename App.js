import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header/Header';
import Main from './src/pages/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
