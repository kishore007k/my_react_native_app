/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Text,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

const DrawerContents = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View>
          <View>
            <View style={styles.profileContainer}>
              <Avatar.Image
                source={require('../../assets/images/sweety.jpg')}
                size={100}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Sweetymahima</Title>
                <Caption style={styles.caption}>@$weety 🍂</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({focused}) => {
                return (
                  <Image
                    source={require('../../assets/icon/home.png')}
                    style={{width: 25, height: 25, resizeMode: 'contain'}}
                  />
                );
              }}
              label="Home"
              onPress={() => {
                props.navigation.navigate('MaterialBottomTabNav');
              }}
            />
            <DrawerItem
              icon={({focused}) => (
                <Image
                  source={require('../../assets/icon/profile.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({focused}) => (
                <Image
                  source={require('../../assets/icon/bookmark.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('Bookmark');
              }}
            />
            <DrawerItem
              icon={({focused}) => (
                <Image
                  source={require('../../assets/icon/settings.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
            <DrawerItem
              icon={({focused}) => (
                <Image
                  source={require('../../assets/icon/service.png')}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('Service');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.signOut}>
        <Drawer.Item
          icon={({color, size}) => {
            return (
              <Image
                source={require('../../assets/icon/signOut.png')}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
            );
          }}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};
export default DrawerContents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  paragraph: {
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  drawerSection: {
    paddingLeft: 50,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#bbbbbb',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 10,
  },
  signOut: {
    alignItems: 'center',
    borderTopWidth: 0.5,
    width: '100%',
  },
});
