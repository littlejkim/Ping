import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import styles from '../constants/styles';
import Clipboard from '@react-native-community/clipboard';
import {urlJson} from '../utils/linkfunctions';
import dynamicLinks from '@react-native-firebase/dynamic-links';

export default function Welcome({navigation}) {
  const [copiedText, setCopiedText] = useState('');
  async function getText() {
    const text = await Clipboard.getString();
    if (text.substring(0, 21) === 'https://voteping.page') {
      setCopiedText(text);
    } else {
      setCopiedText(null);
    }
  }
  // const handleDynamicLink = link => {
  //   console.log("onLink: "+ link.url);
  //   if (link.url.match('https://vote.pls.page.link/.*')) {
  //     let param = urlJson(link.url); //Jsonify parameters of the link
  //     console.log(param)
  //     if (param.roomId) {
  //       //if link has 'roomId' parameter, enter room and navigate to next screen with the parameters
  //       navigation.navigate('Price', {
  //         roomId: param.roomId,
  //         roomTitle: param.roomTitle,
  //       });
  //     }
  //   }
  // }
  useEffect(() => {
    getText();
    dynamicLinks()
    .getInitialLink()
    .then(link => {
      //this 'link' object includes url(the returned link from buildShortLink()), appname, etc.
      console.log("getInitialLink: "+ link.url);
      if (link) {
        //if user opened the app by dynamic link
        if (link.url.match('https://vote.pls.page.link/.*')) {
          let param = urlJson(link.url); //Jsonify parameters of the link
          console.log(param);
          if (param.roomId) {
            //if link has 'roomId' parameter, enter room and navigate to next screen with the parameters
            navigation.navigate('Price', {
              roomId: param.roomId,
              roomTitle: param.roomTitle,
            });
          } else {
            //if link has no 'roomId' parameter, navigate to create room screen
            navigation.navigate('Welcome');
            console.log("no roomId");
          }
        } else {
          //if link does not match, navigate to create room screen
          navigation.navigate('Welcome');
          console.log("no match");
        }
      } else {
        //if the user didn't open the app by dynamic link, navigate to create room screen
        navigation.navigate('Welcome');
        console.log("not through link");
      }
    });
    
  const unsubscribe = dynamicLinks().onLink((link) => {
    console.log("onLink: "+ link.url);
    if (link.url.match('https://vote.pls.page.link/.*')) {
      let param = urlJson(link.url); //Jsonify parameters of the link
      console.log(param)
      if (param.roomId) {
        //if link has 'roomId' parameter, enter room and navigate to next screen with the parameters
        navigation.navigate('Price', {
          roomId: param.roomId,
          roomTitle: param.roomTitle,
        });
      } else{
        navigation.navigate('Welcome');
        console.log("no roomId");
      }
    } else{
        navigation.navigate('Welcome');
        console.log("no match");
    }
  });
  return () => unsubscribe();
  }, []);

  return (
    <View style={footer.container}>
      <View style={footer.content}>
        <Text style={footer.title}>핑</Text>
        <Text style={footer.text}>환영합니다!</Text>
        <Image
          style={{width: 250, height: 250}}
          source={require('../images/main2.png')}
        />
      </View>
      <View style={footer.footer}>
        <TouchableOpacity
          style={footer.joinButton}
          onPress={() => navigation.navigate('Join', {data: copiedText})}
          activeOpacity={0.7}>
          <Text style={footer.joinTitle}>방 가입</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={footer.createButton}
          onPress={() => navigation.navigate('Create')}
          activeOpacity={0.5}>
          <Text style={footer.createTitle}>방 신규 생성</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const footer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 15,
    marginBottom: 30,
    fontSize: 18,
    color: 'black',
  },
  footer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    marginStart: 20,
    marginEnd: 20,
  },
  joinButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6495ED',
    borderRadius: 50,
  },
  joinTitle: {
    fontSize: 19,
    color: 'white',
  },
  createButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  createTitle: {
    fontSize: 17,
    textDecorationLine: 'underline',
    color: '#707070',
  },
});
