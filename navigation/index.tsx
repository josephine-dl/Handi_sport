/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome5';
import { ColorSchemeName,  Pressable, View, Image, SafeAreaView,StyleSheet, Modal, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import { auth, firebase} from '../Setup';
import{ModalPicker} from '../components/Post/ModalPicker'
import {SignUpUser, SendEmailUser, ForgotPassword, SignInUser, SignOutUser, DeleteUser,  ModificationOfEmail, WriteUserData_consultant, WriteUserData,WriteUserData_association, WriteJobOffer} from '../apiService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';


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
      <Stack.Screen name= "ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Entreprise" component={CompanyScreen} />
      <Stack.Screen name="Associations" component={AssociationScreen} />
      <Stack.Screen name="Consultant" component={ConsultantScreen} />
      <Stack.Screen name="ListeOffresEmploi" component={ListeOffresEmploi} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="ModifyEmail" component={ModifyEmail} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>

    </Stack.Navigator>
  );
}

function SplashScreen({navigation}){

  setTimeout(() =>{

    navigation.navigate('Handi +')

  }, 3000);

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
        navigation.navigate('BottomTabNavigator');
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

  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  return(

    <KeyboardAwareScrollView style={{backgroundColor: '#FFF'}}>

    <View style ={{flex: 1, padding: 5, alignItems: 'center', backgroundColor: '#FFF'}}>
      <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: 60, marginBottom: 70}}>Bienvenue sur Handi + !</Text>

      <Image source = {logo}
        style={{height: 150, width: 240,  marginBottom: 70}}></Image>

      <View>
        <MaterialIcons name={'email'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Mail' keyboardType='email-address' value={state.emailAdress} onChangeText={(text) => setState({...state,emailAdress:text})}/>
      </View>

      <View>
        <MaterialIcons name={'lock-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45, marginBottom: 20}}
        secureTextEntry={visible} placeholder='Mot de passe' value={state.password} onChangeText={(text) => setState({...state,password:text})}/>

        <TouchableOpacity style={{position:'absolute', right: 25, top: 20}} onPress={
          () => {
            setVisible(!visible)
            setShow(!show)
          }
        }>
          <MaterialCommunityIcons
          name= {show === false ? 'eye-outline' : 'eye-off-outline'}
          size= {26}
          color= {'#B22222'}/>
        </TouchableOpacity>
      </View>

      <View>

        <TouchableOpacity onPress={signIn} style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginBottom: 40}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Connexion</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => navigation.navigate('Profile')}>
          <Text style={{textAlign: 'center', color: '#000000', fontSize: 18, fontWeight: 'bold'}}>Nouvel utilisateur ? Cliquez ici</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={{textAlign: 'center', color: '#000000', fontSize: 18, fontWeight: 'bold', marginTop: 15}}>Mot de passe oublié ? Cliquez ici</Text>
        </TouchableOpacity>

      </View>

    </View>

  </KeyboardAwareScrollView>
  );
}

function ResetPassword({navigation}){

  const [state, setState]= React.useState({
    emailAdress: '',
  });

  const newPassword = () => {
    ForgotPassword(state.emailAdress)
    alert('Merci de consulter votre mail')
    navigation.navigate('Handi +');
  };

  return(

    <View style={{flex: 1, padding: 5, backgroundColor: '#FFF', alignItems: 'center'}}>

      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 80}}>Réinitialisation</Text>

      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 30, marginBottom: 70}}>de votre mot de passe</Text>

      <View>
        <MaterialIcons name={'email'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Mail' keyboardType='email-address' value={state.emailAdress} onChangeText={(text) => setState({...state,emailAdress:text})}/>
      </View>

      <TouchableOpacity onPress={newPassword} style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginTop: 25}}>
        <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Valider</Text>
      </TouchableOpacity>

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
        <TouchableOpacity onPress={ () => navigation.navigate('Associations')}
          style={{backgroundColor: '#B22222', padding: 10, width: 325, borderRadius: 30, marginHorizontal: 2, marginBottom: 40}}
        >
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Association</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('Consultant')}
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
        WriteUserData(state.nom, state.mail, state.motDePasse, state.confirmationDuMotDePasse)
          .then(() =>{
            SendEmailUser()
            alert('Inscription réussie ! Email envoyé !');
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

  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);


  return(

    <KeyboardAwareScrollView style={{backgroundColor: '#FFF'}}>

    <View style ={{flex: 1, padding: 5, alignItems: 'center', backgroundColor: '#FFF'}}>

      <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 60, marginBottom: 40}}>Créer votre compte Handi + !</Text>

        <Image source = {logo}
          style={{height: 150, width: 240,  marginBottom: 60}}></Image>

        <View>
          <MaterialIcons name={'person-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
          placeholder='Nom de la société' value={state.nom} onChangeText={(text) => setState({...state,nom:text})}/>
        </View>

        <View>
          <MaterialIcons name={'email'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
          placeholder='Mail' keyboardType='email-address' value={state.mail} onChangeText={(text) => setState({...state,mail:text})} />
        </View>

        <View>
          <MaterialIcons name={'lock-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45,marginBottom: 15}}
          secureTextEntry={visible} placeholder='Mot de passe' value={state.motDePasse} onChangeText={(text) => setState({...state,motDePasse:text})} />

          <TouchableOpacity style={{position:'absolute', right: 25, top: 20}} onPress={
            () => {
              setVisible(!visible)
              setShow(!show)
            }
          }>
            <MaterialCommunityIcons
            name= {show === false ? 'eye-outline' : 'eye-off-outline'}
            size= {26}
            color= {'#B22222'}/>
          </TouchableOpacity>
        </View>

        <View>
          <MaterialIcons name={'lock-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45, marginBottom: 35}}
          secureTextEntry={visible} placeholder='Confirmation du mot de passe' value={state.confirmationDuMotDePasse} onChangeText={(text) => setState({...state,confirmationDuMotDePasse:text})}/>

          <TouchableOpacity style={{position:'absolute', right: 25, top: 20}} onPress={
            () => {
              setVisible(!visible)
              setShow(!show)
            }
          }>
            <MaterialCommunityIcons
            name= {show === false ? 'eye-outline' : 'eye-off-outline'}
            size= {26}
            color= {'#B22222'}/>
          </TouchableOpacity>

        </View>

        {
          state.motDePasse != state.confirmationDuMotDePasse ?
          <Text style={{fontWeight: 'bold', marginBottom: 20}}> Attention : mots de passe différents</Text> : null
        }


        <TouchableOpacity onPress={signUp}
            style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginBottom: 30}}>
            <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Valider</Text>
        </TouchableOpacity>


    </View>

    </KeyboardAwareScrollView>

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

    <KeyboardAwareScrollView style={{backgroundColor: '#FFF'}}>

    <View style ={{flex: 1, padding: 5, alignItems: 'center', backgroundColor: '#FFF'}}>

      <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 20}}>Renseigner votre offre d'emploi</Text>

      <View>
        <MaterialIcons name={'work-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Intitulé du poste' value={state.intitule} onChangeText={(text) => setState({...state,intitule:text})}/>
      </View>

      <View>
        <MaterialIcons name={'person-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Nom de la société' value={state.entreprise} onChangeText={(text) => setState({...state,entreprise:text})}/>
      </View>

      <View>
        <MaterialIcons name={'image'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Logo de la société'value={state.imageURL} onChangeText={(text) => setState({...state,imageURL:text})}/>
      </View>

      <View>
        <MaterialIcons name={'school'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Formation requise' value={state.niveauDeFormation} onChangeText={(text) => setState({...state,niveauDeFormation:text})} />
      </View>

      <View>
        <MaterialIcons name={'euro'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Salaire' value={state.salaire} onChangeText={(text) => setState({...state,salaire:text})}/>
      </View>

      <View>
        <MaterialIcons name={'help-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Type de contrat' value={state.typeDeContrat} onChangeText={(text) => setState({...state,typeDeContrat:text})} />
      </View>

      <View>
        <MaterialIcons name={'room'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Localisation' value={state.localisation} onChangeText={(text) => setState({...state,localisation:text})}/>
      </View>

      <View>
        <MaterialIcons name={'event'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Date de publication' value={state.datePublication} onChangeText={(text) => setState({...state,datePublication:text})} />
      </View>

      <View>
        <MaterialIcons name={'link'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45, marginBottom: 25}}
        placeholder='Lien pour postuler' value={state.lien} onChangeText={(text) => setState({...state,lien:text})}/>
      </View>

        <TouchableOpacity onPress= {offer}
          style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Valider</Text>
        </TouchableOpacity>

    </View>

  </KeyboardAwareScrollView>

  );
}


function AssociationScreen({navigation}){

  const [state, setState]= React.useState({
    nom: '',
    mail: '',
    motDePasse: '',
    confirmationDuMotDePasse: '',
    description:'',
    cotisation:'',
    Ville:'',
    
  });

  const [user, setUser]=React.useState();

  const signUp = () => {
    SignUpUser(state.mail, state.motDePasse)
      .then(data => {
        WriteUserData_association(state.nom, state.mail, state.Ville, state.description, state.motDePasse, state.confirmationDuMotDePasse)
          .then(() =>{
            SendEmailUser()
            alert('Inscription réussie ! Email envoyé !');
            navigation.navigate('Association');
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

 

  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [chooseData, setchooseData] = useState('Jour entrainement : ');
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([])

  const changeModalVisibility = (bool) =>{
    setModalVisible(bool)
  }

  const setData = (option) =>{
    setchooseData(option)
  }

  

  return(

    <KeyboardAwareScrollView style={{backgroundColor: '#FFF'}}>

    <View style ={{flex: 1, padding: 5, alignItems: 'center', backgroundColor: '#FFF'}}>

      <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 60, marginBottom: 40}}>Créer votre compte Handi + !</Text>

        <Image source = {logo}
          style={{height: 150, width: 240,  marginBottom: 60}}></Image>

        <View>
          <MaterialIcons name={'person-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          placeholder='Nom de Association' value={state.nom} onChangeText={(text) => setState({...state,nom:text})}/>
        </View>

        <View>
          <TextInput style={styles.container}
          placeholder='Description' value={state.description} onChangeText={(text) => setState({...state,description:text})}/>
        </View>

        <View>
          <MaterialIcons name={'person-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>  
          <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={( )=> changeModalVisibility(true)}>
              <Text>{chooseData}</Text>
            </TouchableOpacity>
            <Modal transparent={true} animationType='fade' visible={isModalVisible} nRequestClose={()=>changeModalVisibility(false)}>
              <ModalPicker changeModalVisibility={changeModalVisibility} setDate={setData}>
                
              </ModalPicker>
            </Modal>

          </SafeAreaView>
        </View>

        <View>
          <TextInput style={styles.container} placeholder='Heure' >
          </TextInput>
        </View>
      
        <View>
        <MaterialIcons name={'euro'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          placeholder='Cotisation' value={state.cotisation} onChangeText={(text) => setState({...state,cotisation:text})}/>
        </View>

        <View>
        <MaterialIcons name={'euro'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          placeholder='Ville' value={state.Ville} onChangeText={(text) => setState({...state,Ville:text})}/>
        </View>
        
        

        <View>
          <MaterialIcons name={'email'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          placeholder='Mail' keyboardType='email-address' value={state.mail} onChangeText={(text) => setState({...state,mail:text})} />
        </View>

        <View>
          <MaterialIcons name={'lock-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          secureTextEntry={visible} placeholder='Mot de passe' value={state.motDePasse} onChangeText={(text) => setState({...state,motDePasse:text})} />

          <TouchableOpacity style={{position:'absolute', right: 25, top: 20}} onPress={
            () => {
              setVisible(!visible)
              setShow(!show)
            }
          }>
            <MaterialCommunityIcons
            name= {show === false ? 'eye-outline' : 'eye-off-outline'}
            size= {26}
            color= {'#B22222'}/>
          </TouchableOpacity>
        </View>

        <View>
          <MaterialIcons name={'lock-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45, marginBottom: 35}}
          secureTextEntry={visible} placeholder='Confirmation du mot de passe' value={state.confirmationDuMotDePasse} onChangeText={(text) => setState({...state,confirmationDuMotDePasse:text})}/>

          <TouchableOpacity style={{position:'absolute', right: 25, top: 20}} onPress={
            () => {
              setVisible(!visible)
              setShow(!show)
            }
          }>
            <MaterialCommunityIcons
            name= {show === false ? 'eye-outline' : 'eye-off-outline'}
            size= {26}
            color= {'#B22222'}/>
          </TouchableOpacity>

        </View>

        {
          state.motDePasse != state.confirmationDuMotDePasse ?
          <Text style={{fontWeight: 'bold', marginBottom: 20}}> Attention : mots de passe différents</Text> : null
        }


        <TouchableOpacity onPress={signUp}
            style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginBottom: 30}}>
            <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Valider</Text>
        </TouchableOpacity>


    </View>

    </KeyboardAwareScrollView>

  );

}




function ConsultantScreen({navigation}){

  const [state, setState]= React.useState({
    nom: '',
    prenom:'',
    mail: '',
    motDePasse: '',
    confirmationDuMotDePasse: '',
    description:'',
    Honoraire:'',
    Ville:'',
    
  });

  const [user, setUser]=React.useState();

  const signUp = () => {
    SignUpUser(state.mail, state.motDePasse)
      .then(data => {
        WriteUserData_consultant(state.nom, state.prenom, state.Ville, state.mail, state.motDePasse, state.confirmationDuMotDePasse)
          .then(() =>{
            SendEmailUser()
            alert('Inscription réussie ! Email envoyé !');
            navigation.navigate('SettingsScreen');
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

 

  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
 
  

  return(

    <KeyboardAwareScrollView style={{backgroundColor: '#FFF'}}>

    <View style ={{flex: 1, padding: 5, alignItems: 'center', backgroundColor: '#FFF'}}>

      <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 60, marginBottom: 40}}>Créer votre compte Handi + !</Text>

        <Image source = {logo}
          style={{height: 150, width: 240,  marginBottom: 60}}></Image>

        <View>
          <MaterialIcons name={'person-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          placeholder='Nom ' value={state.nom} onChangeText={(text) => setState({...state,nom:text})}/>
        </View>

        <View>
          <MaterialIcons name={'person-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          placeholder='Prenom' value={state.prenom} onChangeText={(text) => setState({...state,prenom:text})}/>
        </View>
      
        <View>
        <MaterialIcons name={'euro'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          placeholder='Honoraire' value={state.Honoraire} onChangeText={(text) => setState({...state,Honoraire:text})}/>
        </View>

        <View>
        <MaterialIcons name={'euro'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          placeholder='Ville' value={state.Ville} onChangeText={(text) => setState({...state,Ville:text})}/>
        </View>
        
        

        <View>
          <MaterialIcons name={'email'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          placeholder='Mail' keyboardType='email-address' value={state.mail} onChangeText={(text) => setState({...state,mail:text})} />
        </View>

        <View>
          <MaterialIcons name={'lock-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={styles.container}
          secureTextEntry={visible} placeholder='Mot de passe' value={state.motDePasse} onChangeText={(text) => setState({...state,motDePasse:text})} />

          <TouchableOpacity style={{position:'absolute', right: 25, top: 20}} onPress={
            () => {
              setVisible(!visible)
              setShow(!show)
            }
          }>
            <MaterialCommunityIcons
            name= {show === false ? 'eye-outline' : 'eye-off-outline'}
            size= {26}
            color= {'#B22222'}/>
          </TouchableOpacity>
        </View>

        <View>
          <MaterialIcons name={'lock-outline'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
          <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45, marginBottom: 35}}
          secureTextEntry={visible} placeholder='Confirmation du mot de passe' value={state.confirmationDuMotDePasse} onChangeText={(text) => setState({...state,confirmationDuMotDePasse:text})}/>

          <TouchableOpacity style={{position:'absolute', right: 25, top: 20}} onPress={
            () => {
              setVisible(!visible)
              setShow(!show)
            }
          }>
            <MaterialCommunityIcons
            name= {show === false ? 'eye-outline' : 'eye-off-outline'}
            size= {26}
            color= {'#B22222'}/>
          </TouchableOpacity>

        </View>

        {
          state.motDePasse != state.confirmationDuMotDePasse ?
          <Text style={{fontWeight: 'bold', marginBottom: 20}}> Attention : mots de passe différents</Text> : null
        }


        <TouchableOpacity onPress={signUp}
            style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginBottom: 30}}>
            <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Valider</Text>
        </TouchableOpacity>


    </View>

    </KeyboardAwareScrollView>

  );

}



const styles = StyleSheet.create({
  container: {
    borderWidth: 1, 
    borderColor: '#00CCCB', 
    borderRadius: 10, 
    padding: 8, 
    margin: 10, 
    width: 350, 
    paddingLeft: 45, 
    marginBottom: 35
  }
})



function SettingsScreen({navigation}) {

  const logout = () => {
    Alert.alert(
      "Déconnexion",
      "Voulez-vous vraiment vous déconnecter ?",
      [
        {
          text: "Annuler",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirmer",
          onPress: () => navigation.navigate('Handi +')

          },

      ],
      { cancelable: false }
    );
  };

  return(

    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        <TouchableOpacity onPress= {logout} style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginBottom: 30}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Déconnexion</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress= {DeleteUser} style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginBottom: 30}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Supprimer son compte</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate('ModifyEmail')} style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginBottom: 30}}>
          <Text style={{textAlign: 'center', color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Modifier son adresse mail</Text>
        </TouchableOpacity>

    </View>

  );

}

function ModifyEmail({navigation}){

  const [state, setState]= React.useState({
    emailAdress: '',
  });

  const newEmail = () => {
    ModificationOfEmail(state.emailAdress)
    alert('Merci de consulter votre mail')
    navigation.navigate('Handi +');
  };

  return(

    <View style={{flex: 1, padding: 5, backgroundColor: '#FFF', alignItems: 'center'}}>

      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 80}}>Modification</Text>

      <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 30, marginBottom: 70}}>de votre adresse mail</Text>

      <View>
        <MaterialIcons name={'email'} size={28} color='#00CCCB' style ={{position: 'absolute', top: 16, left: 18, color: '#B22222'}}/>
        <TextInput style={{borderWidth: 1, borderColor: '#00CCCB', borderRadius: 10, padding: 8, margin: 10, width: 350, paddingLeft: 45}}
        placeholder='Mail' keyboardType='email-address' value={state.emailAdress} onChangeText={(text) => setState({...state,emailAdress:text})}/>
      </View>

      <TouchableOpacity onPress={newEmail} style={{backgroundColor: '#00CCCB', padding: 10, width: 250, borderRadius: 30, marginHorizontal: 2, marginTop: 25}}>
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
        tabBarActiveTintColor: '#B22222',
        headerStyle: {backgroundColor: '#FFF'},
      }}>

      <BottomTab.Screen
        name="TabOne"
        component={SportScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Sport',
          tabBarIcon: ({ color }) => <MaterialIcons name="sports" size={20} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={WorkScreen}
        options={{
          title: "Emploi",
          tabBarIcon: ({ color }) => <Entypo name="briefcase" size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={CultureScreen}
        options={{
          title: 'Culture',
          tabBarIcon: ({ color }) => <MaterialIcons name="account-balance" size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={InfoScreen}
        options={{
          title: 'HandiScoop',
          tabBarIcon: ({ color }) => <FontAwesome name="newspaper-o" size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={ChatScreen}
        options={{
          title: 'HandiChat',
          tabBarIcon: ({ color }) => <Entypo name="chat" size={20} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Paramètres',
          tabBarIcon: ({ color }) => <Icon name="person" size={20} color={color} />,
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

