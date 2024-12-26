import React from 'react';
import {StyleSheet, View} from 'react-native';
import ZegoUIKitPrebuiltVideoConference from '@zegocloud/zego-uikit-prebuilt-video-conference-rn';

export default function VideoConferencePage(props) {
  const {route} = props;
  const {params} = route;
  const {userID, userName,conferenceID} = params;
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltVideoConference
        appID={Your App ID}
        appSign='YourAppSign'
        userID={userID}
        userName={userName}
        conferenceID={conferenceID}
        config={{
          onLeave: () => {
            props.navigation.navigate('HomePage');
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
