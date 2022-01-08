/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  ChatRoom: undefined;
  Contacts: undefined;
  " ": undefined;
  "Handi +": undefined;
  Profile: undefined;
  ResetPassword: undefined;
  Entreprise: undefined;
  Handicap: undefined;
  ListeOffresEmploi: undefined;
  SettingsScreen: undefined;
  ModifyEmail: undefined;
  BottomTabNavigator: undefined;
  SplashScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
  TabFive: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

/*export type User = {
  id: String;
  name: String;
  imageUri: String;
  status: String;
};*/

/*
export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User,
};

export type Topic = {
  id: String;
  name: String,
  lastMessage: Message;
}

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
};

export type Salon = {
  id: String;
  name: String;
  description: String;
  lastTopic: Topic;
};*/