import database from '@react-native-firebase/database';
import iid from '@react-native-firebase/iid';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import SHA256 from 'crypto-js/sha256';
import {useValue} from 'react-native-redash';

//build link
async function buildLinkShort(roomTitle, memberCount) {
    const link = await dynamicLinks().buildShortLink({ //create link with hashed parameters
      link: 'https://vote.pls.page.link/?roomTitle=' + roomTitle + '&memberCount=' + memberCount,  //link parameter. add parameters here
      domainUriPrefix: 'https://votepls.page.link/', //the whole 'link' string will be added as a parameter to this url.
      android: {
        packageName: 'com.ping',
      },
      ios: {
        bundleId: 'com.ping',
      },
    });
  
    return link;  //final dynamic link with hashed parameters. users see this link. For example: https://votepls.page.link/bV8SjD8CR1c3dbz29. 
                  //(See ../Tests/TestFront.js for receiving and parsing dynamic links) 
  }


//parse url and put parameters in json form
function urlJson(url) {
    let regex = /[?&]([^=#]+)=([^&#]*)/g,
      params = {},
      match;
    while ((match = regex.exec(url))) {
      params[match[1]] = match[2];
    }
    return params;
  }


//build long link. we only need buildShortLink, but just in case.
async function buildLink() {
  var instance = await iid().get();
  const link = await dynamicLinks().buildLink({ //builds raw link. For example: https://votepls.page.link/?apn=com.ping&ibi=com.ping&link=https://votepls.page.link/?room=eZyTWcHnRA2XE00JzFpm8a
    link: 'https://vote.pls.page.link/?room=' + instance,
    domainUriPrefix: 'https://votepls.page.link/',
    android: {
      packageName: 'com.ping',
    },
    ios: {
      bundleId: 'com.ping',
    },
  });

  return link;
}
export {
    buildLinkShort,
    urlJson
};
