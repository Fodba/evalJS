function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "#32CD32";
}

function verifNomPrenom(champ)
{
    let reg =/^[a-zA-Z]+$/;
    
     if(!reg.test(champ.value))
   {
      surligne(champ, true );
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifDateN(Date)
{
    let reg = /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;
     
    if(!reg.test(Date.value))
   {
      surligne(Date, true );
      return false;
   }
   else
   {
      surligne(Date, false);
      return true;
   }
}

function verifAdd(adresse)
{
    let reg = /^[0-9]{1,3}(?:[,. ]?){1,2}[-a-zA-Z‡‚‰ÈËÍÎÔÓÙˆ˘˚¸Á]+/;
    
    if(!reg.test(adresse.value))
   {
      surligne(adresse, true );
      return false;
   }
   else
   {
      surligne(adresse, false);
      return true;
   }
}

function verifCp(cp)
{
    let reg = /[0-9]{5,5}/;
    
    if(!reg.test(cp.value))
   {
      surligne(cp, true );
      return false;
   }
   else
   {
      surligne(cp, false);
      return true;
   }
}

function verifVille(ville)
{
    let reg = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/g;
    
    if(!reg.test(ville.value))
   {
      surligne(ville, true );
      return false;
   }
   else
   {
      surligne(ville, false);
      return true;
   }
}

function verifMail(mail)
{
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    if(!reg.test(mail.value))
   {
      surligne(mail, true );
      return false;
   }
   else
   {
      surligne(mail, false);
      return true;
   }
}

function verification(form)
{
   let nomok = verifNomPrenom(form.nom);
   let prenomOk = verifNomPrenom(form.prenom);
   let dateOk = verifDateN(form.daten);
   let AddOk = verifAdd(form.adresse);
   let cpOk = verifCp(form.cp);
   let villeOk  = verifVille(form.ville);
   let mailOk = verifMail(form.mail);
   
   if(nomok && prenomOk && dateOk && AddOk && cpOk && villeOk && mailOk)
    {   
      return true
    }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}