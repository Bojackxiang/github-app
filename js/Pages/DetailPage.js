import React from "react";
import { StyleSheet, Text, View, Button, } from "react-native";
import { WebView } from 'react-native-webview';
import NavigationBar from "../common/NavigationBar";
import NavigationUtils from "../Navigator/Navitation.utils";


const TRENDING = "https://github.com";

const DetailPage = (props) => {
  const { url, title } = props;
  const html_url = "https://www.baidu.com";
  const pageTitle = `${title}` || "No Title";

  const [canGoBack, setCanGoBack] = React.useState(false);
  const [navigationStatus, setNavigationStatus] = React.useState({
    canGoBack: canGoBack,
  });
  const webView = React.useRef(null);

  const _onBack = () => {
    if (canGoBack) {
      webView.goBack();
    } else {
      NavigationUtils.goBack(props.navigation);
    }
  };

  const _onNavigationChange = (e) => {
      console.log(e)
    //   webView.current.goBack() // 这个网络页面的goback
    props.navigation.goBack(); // 这个是navigation的go back

  };

  console.log('webview page', {html_url})

  return (
    <View style={styles.container}>
      <NavigationBar />
      <WebView
        source={{uri:'https://google.com'}}
        ref={webView}
        // startInLoadingState={true}
        onNavigationStateChange={(e) => _onNavigationChange(e)}
        
      />
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
  
  // justifyContent: 'center',
  // alignItems: 'center'
});
