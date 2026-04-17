import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView 
      source={{ uri: 'https://cajui.ifnmg.edu.br' }} 
      style={{ flex: 1 }} 
    />
  );
}
