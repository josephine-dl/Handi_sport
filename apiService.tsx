import React from 'react';
import {auth, firebase, database} from './Setup'
import {sendEmailVerification, sendPasswordResetEmail} from "firebase/auth";

export const SignUpUser = (email, password) => {

  return new Promise(function(resolve, reject){
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() =>{
        resolve('Inscription réussie');
      })
      .catch(error => {
        reject(error)
      });

  });
};

export const SendEmailUser = () => {

  return new Promise(function(resolve, reject){

    firebase.auth().currentUser.sendEmailVerification()

  });
};

export const ForgotPassword = (email) => {

  return new Promise(function(resolve, reject){

  firebase.auth().sendPasswordResetEmail(email)

    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

  });

  });
};

export const SignInUser = (email, password) => {

  return new Promise(function(resolve, reject){
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() =>{
        resolve('Connexion réussie');
      })
      .catch(error => {
        reject(error)
      });
  });
};

export const DeleteUser = () => {

  return new Promise(function(resolve, reject){

    firebase.auth().currentUser.delete()
      .then(() => {
        resolve('Suppression réussie');
      })
      .catch(error => {

      });

  });

};

export const SignOutUser = () => {

  return new Promise(function(resolve, reject){

    auth
      .signOut()
      .then(() => {
        resolve('Déconnexion réussie');
      })
      .catch(error => {

      });

  });

};

export const ModificationOfEmail = (email) => {

  return new Promise(function(resolve, reject){

  firebase.auth().currentUser.updateEmail(email)

  firebase.auth().sendPasswordResetEmail(email)

    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

  });

  });
};


export const WriteUserData = async (nom, mail, motDePasse, confirmationDuMotDePasse) => {

  try{

    return await firebase.database().ref('/Utilisateurs/Entreprises/' + nom).set({
        mail : mail,
        motDePasse: motDePasse,
        confirmationDuMotDePasse: confirmationDuMotDePasse
      });

    }catch(error) {
        return error;
      }
};


export const WriteUserData_association = async (nom, mail, ville, description, motDePasse, confirmationDuMotDePasse) => {

  try{

    return await firebase.database().ref('/Utilisateurs/Associations/' + nom).set({
        mail : mail,
        motDePasse: motDePasse,
        confirmationDuMotDePasse: confirmationDuMotDePasse
      });

    }catch(error) {
        return error;
      }
};


export const WriteUserData_consultant = async (nom, prenom, ville,  motDePasse, confirmationDuMotDePasse) => {

  try{

    return await firebase.database().ref('/Utilisateurs/Consultant/' + nom).set({
        mail : mail,
        motDePasse: motDePasse,
        confirmationDuMotDePasse: confirmationDuMotDePasse
      });

    }catch(error) {
        return error;
      }
};

export const WriteJobOffer = async (intitule, entreprise, localisation, niveauDeFormation, typeDeContrat, salaire, datePublication, imageURL, lien) => {

  try{

    return await firebase.database().ref('/Utilisateurs/Entreprises/-- Les offres --/' + entreprise).set({
        intitule: intitule,
        entreprise: entreprise,
        localisation: localisation,
        niveauDeFormation: niveauDeFormation,
        typeDeContrat: typeDeContrat,
        salaire: salaire,
        datePublication: datePublication,
        imageURL:imageURL,
        lien: lien

      });

    }catch(error) {
        return error;
      }


};
