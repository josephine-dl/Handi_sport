import React from 'react';
import {auth, firebase, database} from './Setup'

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

export const WriteJobOffer = async (intitule, entreprise, localisation, niveauDeFormation, typeDeContrat, salaire, datePublication, imageURL) => {

  try{

    return await firebase.database().ref('/Utilisateurs/Entreprises/Offres' + entreprise).set({
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
