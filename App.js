import {StatusBar} from 'expo-status-bar';
import {
  FlatList,
  Image, ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import List from './components/List';



const App = () => {
  return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.A} >
          <ImageBackground source={require("./assets/tuxedo.webp")} resizeMode="cover" style={styles.catLogo} imageStyle={styles.rounding}/>
          <Text style={styles.slogan}>Slogani aplikaatiolle</Text>
        </View>
        <List />
        <StatusBar style="auto" />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  rounding: {
    borderRadius: 15
  },
  catLogo: {
    width: "100%",
    height: "100%"
  },
  slogan: {
    backgroundColor: "rgba(65, 250, 32,0.6)",
    width: 200,
    position: "absolute",
    bottom: 20,
    left: 30,
    padding: 10,
    borderRadius: 10
  },

  A: {
    height: 300,
    marginBottom: 15,
    borderRadius: 20,
    position: "relative"
  }
});

export default App;