/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View, Image, Text, TouchableOpacity, TextInput, Icon} from 'react-native';
import { auth, firebase} from '../Setup';
import {SignUpUser, SignInUser, SubmitUser, WriteUserData, WriteJobOffer} from '../apiService';
var logo = require('../assets/images/logo.png');
var loader = require('../assets/images/loading.gif');

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import SportScreen from '../screens/SportScreen';
import WorkScreen from '../screens/WorkScreen';
import CultureScreen from '../screens/CultureScreen';
import InfoScreen from '../screens/InfoScreen';
import ChatScreen from '../screens/ChatScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Setup from '../Setup';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (

    <NavigationContainer

      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{ headerMode:'screen',
                     headerTintColor:'#00CCCB',
                     headerStyle: {backgroundColor: '#00CCCB'},
                   }} >

      <Stack.Screen name=" " component={SplashScreen} />
      <Stack.Screen name="Handi +" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Entreprise" component={CompanyScreen} />
      <Stack.Screen name="ListeOffresEmploi" component={ListeOffresEmploi} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>

    </Stack.Navigator>
  );
}

function SplashScreen({navigation}){

  setTimeout(() =>{

    navigation.navigate('Handi +')

  }, 5050);

  return(
  <View

    style ={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF'}}>

    <Image source = {logo}
      style={{marginTop: 10, height: 200, width: 300}}></Image>

    <Image source = {loader}
      style={{marginTop: 100, height: 230, width: 290}}></Image>

  </View>

  );
}

function HomeScreen({navigation}){

  const [state, setState]= React.useState({
    emailAdress: '',
    password: '',
  });

  const [user, setUser]=React.useState();

  const signIn = () => {
    SignInUser(state.emailAdress, state.password)
      .then(data => {
        alert(data);
      })
      .catch(error => {
        alert(error);
      })
  };

  const onAuthStateChanged = user => {
    setUser(user);
  };

  React.useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return(

    <View style ={{flex: 1, padding: 5, alignItems: 'center', backgroundColor: '#FFF'}}>
      <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: 60, marginBottom: 40}}>Bienvenue sur Handi + !</Text>

      <Image source = {logo}
        style={{height: 150, width: 240,  marginBottom: 60}}></Image>

      <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
      placeholder='Mail' keyboardType='email-address' value={state.emailAdress} onChangeText={(text) => setState({...state,emailAdress:text})}/>
    

      <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, marginBottom: 5}}
      secureTextEntry={true} placeholder='Mot de passe' value={state.password} onChangeText={(text) => setState({...state,password:text})}/>

      <View style={{margin: 30, paddingVertical: 20}}>

        <TouchableOpacity onPress={(signIn) => navigation.navigate('BottomTabNavigator')}
          style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginBottom: 30}}
        >
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Connexion</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => navigation.navigate('Profile')}>
          <Text style={{textAlign: 'center', color: '#000000', fontSize: 18, fontWeight: 'bold'}}>Nouvel utilisateur ? Cliquez ici</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

function ProfileScreen({navigation}){

  return(

      <View style={{flex: 1, padding: 5, backgroundColor: '#FFF', alignItems: 'center'}}>

        <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: 80, marginBottom: 70}}>Votre profil ?</Text>

        <TouchableOpacity onPress={ () => navigation.navigate('BottomTabNavigator')}
          style={{backgroundColor: '#00CCCB', padding: 10, width: 325, borderRadius: 30, marginHorizontal: 2, marginBottom: 40}}
        >
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Personne en situation de handicap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('BottomTabNavigator')}
          style={{backgroundColor: '#B22222', padding: 10, width: 325, borderRadius: 30, marginHorizontal: 2, marginBottom: 40}}
        >
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Association</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('BottomTabNavigator')}
          style={{backgroundColor: '#00CCCB', padding: 10, width: 325, borderRadius: 30, marginHorizontal: 2, marginBottom: 40}}
        >
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Consultant</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('Entreprise')}
          style={{backgroundColor: '#B22222', padding: 10, width: 325, borderRadius: 30, marginHorizontal: 2, marginBottom: 40}}
        >
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Entreprise</Text>
        </TouchableOpacity>

        </View>

  );
}

function CompanyScreen({navigation}){

  const [state, setState]= React.useState({
    nom: '',
    mail: '',
    motDePasse: '',
    confirmationDuMotDePasse: '',

  });

  const [user, setUser]=React.useState();
  const signUp = () => {
    SignUpUser(state.mail, state.motDePasse)
      .then(data => {
        WriteUserData(state.nom, state.mail, state.motDePasse, state.confirmationDuMotDePasse).
        then(() =>{
          alert('Inscription réussie');
          navigation.navigate('ListeOffresEmploi');
       }).
        catch((error) =>{
          alert(error);
        })

      })
      .catch(error => {
        alert(error);
      })
  };

  const onAuthStateChanged = user => {
    setUser(user);
  };

  React.useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return(

    <View style ={{flex: 1, padding: 5, alignItems: 'center', backgroundColor: '#FFF'}}>

      <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 60, marginBottom: 40}}>Créer votre compte Handi + !</Text>

        <Image source = {logo}
          style={{height: 150, width: 240,  marginBottom: 60}}></Image>

        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Nom de la société' value={state.nom} onChangeText={(text) => setState({...state,nom:text})}/>

        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Mail' keyboardType='email-address' value={state.mail} onChangeText={(text) => setState({...state,mail:text})} />

        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, marginBottom: 15}}
        secureTextEntry={true} placeholder='Mot de passe' value={state.motDePasse} onChangeText={(text) => setState({...state,motDePasse:text})} />

        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, marginBottom: 35}}
        secureTextEntry={true} placeholder='Confirmation du mot de passe' value={state.confirmationDuMotDePasse} onChangeText={(text) => setState({...state,confirmationDuMotDePasse:text})}/>

        <TouchableOpacity onPress = {signUp}
          style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2}}
        >
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Valider</Text>
        </TouchableOpacity>

    </View>


  );

}

function ListeOffresEmploi({navigation}) {

  const [state, setState]= React.useState({
    intitule:'',
    entreprise:'',
    localisation:'',
    niveauDeFormation:'',
    typeDeContrat:'',
    salaire:'',
    datePublication:'',
    imageURL: '',
    lien: ''
  });

  const offer = () => {
    WriteJobOffer(state.intitule, state.entreprise, state.localisation, state.niveauDeFormation, state.typeDeContrat, state.salaire, state.datePublication, state.imageURL, state.lien)

      .then(data => {
          alert('Offre enregistrée');
          navigation.navigate('BottomTabNavigator');
        }).
        catch((error) =>{
          alert(error);
        })
  };

  return(

    <View style ={{flex: 1, padding: 5, alignItems: 'center', backgroundColor: '#FFF'}}>

      <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 20}}>Renseigner votre offre d'emploi</Text>


        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Intitulé du poste' value={state.intitule} onChangeText={(text) => setState({...state,intitule:text})}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Nom de la société' value={state.entreprise} onChangeText={(text) => setState({...state,entreprise:text})}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Logo de la société'value={state.imageURL} onChangeText={(text) => setState({...state,imageURL:text})}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Formation requise' value={state.niveauDeFormation} onChangeText={(text) => setState({...state,niveauDeFormation:text})} />
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Salaire' value={state.salaire} onChangeText={(text) => setState({...state,salaire:text})}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Type de contrat' value={state.typeDeContrat} onChangeText={(text) => setState({...state,typeDeContrat:text})} />
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Localisation' value={state.localisation} onChangeText={(text) => setState({...state,localisation:text})}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350}}
        placeholder='Date de publication' value={state.datePublication} onChangeText={(text) => setState({...state,datePublication:text})} />
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, marginBottom: 25}}
        placeholder='Lien pour postuler' value={state.lien} onChangeText={(text) => setState({...state,lien:text})}/>

        <TouchableOpacity onPress= {offer}
          style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2}}
        >
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Valider</Text>
        </TouchableOpacity>

    </View>


  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={SportScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Sport',
          tabBarIcon: ({ color }) => <MaterialIcons name="sports" size={24} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={WorkScreen}
        options={{
          title: "Emploi",
          tabBarIcon: ({ color }) => <Entypo name="briefcase" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={CultureScreen}
        options={{
          title: 'Culture',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-balance" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={InfoScreen}
        options={{
          title: 'HandiScoop',
          tabBarIcon: ({ color }) => <FontAwesome name="newspaper-o" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={ChatScreen}
        options={{
          title: 'HandiChat',
          tabBarIcon: ({ color }) => <Entypo name="chat" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
