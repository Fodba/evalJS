

function AfficherMasquer(nombre)
{
    let div =  document.getElementById('contentexo');
   
    //console.log(nombre);
    //console.log(div);
    if(div.childElementCount == 0)
    {
       if(nombre==1)
       {        
                let label = document.createElement('label');
                let input = document.createElement('input');
                let h3 = document.createElement('h3');
                let label2 = document.createElement('label');
                let input2 = document.createElement('input');
                let button = document.createElement('input');
                h3.innerHTML = "Total d'une commande";
                label.for='PU';
                label.textContent= 'Indiquez le prix unitaire du produit';
                insertAttr(input, {'type':'text', 'name':'PU', 'id':'PU'});
                label2.for='QTECOM';
                label2.textContent = 'Indiquer la quantitee a commander';
                insertAttr(input2, {'type':'number', 'name':'QTECOM', 'id':'QTECOM'});
                insertAttr(button,{'type':'button','value':'valider'});
                button.onclick = function(){
                    exo1(input.value,input2.value);
                }
                div.append(h3,label,document.createElement('br'),input,document.createElement('br'),label2,document.createElement('br'),input2,document.createElement('br'),button,document.createElement('br')); 
        }
        if(nombre==2)
        {           
                    let h3 = document.createElement('h3');
                    let label2 = document.createElement('label');
                    let input2 = document.createElement('input');
                    let button = document.createElement('input');
                 h3.innerHTML = "Somme des entiers inferieurs a N";
                 label2.for='nombre';
                 label2.textContent= 'Indiquer votre nombre';
                 insertAttr(input2,{'type':'text','id':'nombre','name':'nombre'});
                 insertAttr(button,{'type':'button','value':'valider'});
                 button.onclick = function(){
                     exo2(input2.value);
                 };
                 div.append(h3,label2,document.createElement('br'),input2,document.createElement('br'),button,document.createElement('br'));

        }
        if(nombre==3)
        {
            let h3 = document.createElement('h3');
            h3.innerHTML = "Mini et maxi";
            div.append(h3);
            exo3();
        }
        if(nombre==4)
        {
            let h3 = document.createElement('h3');
            h3.innerHTML = "Calcul du nombre de jeunes, de moyens et de vieux";
            div.append(h3);
            exo4();
        }        
        if(nombre==5)
        {
            let h3 = document.createElement('h3');
            h3.innerHTML = "Table de multiplication";
            let label2 = document.createElement('label');
            let input2 = document.createElement('input');
            let button = document.createElement('input');
            label2.for='multiplication';
            label2.textContent= 'Indiquer la table voulue';
            insertAttr(input2,{'type':'number','id':'multiplication','name':'multiplication'});
            insertAttr(button,{'type':'button','value':'valider'});
            button.onclick = function(){
                     exo5(input2.value);
                 };
            
            div.append(h3,label2,document.createElement('br'),input2,document.createElement('br'),button,document.createElement('br'));
            
        }
        if(nombre==6)
                {
                    let h3 = document.createElement('h3');
            h3.innerHTML = "recherche d'un prénom";
            let label2 = document.createElement('label');
            let input2 = document.createElement('input');
            let button = document.createElement('input');
            label2.for='prenom';
            label2.textContent= 'Quel prenom voulez-vous effacer ? :';
            insertAttr(input2,{'type':'text','id':'prenom','name':'prenom'});
            insertAttr(button,{'type':'button','value':'valider'});
            button.onclick = function(){
                     exo6(input2.value);
                 };
            
            div.append(h3,label2,document.createElement('br'),input2,document.createElement('br'),button,document.createElement('br'));
                }
                
        
           
    }
    else{
    supp(nombre);

    }
}


function exo1(prixunitaire, qtecom)

{
    let div =  document.getElementById('contentexo');
    let rep = document.createElement('p');
    let port = 0;
    let prix = prixunitaire * qtecom;
    let remise;
    let prixtot;
    rep.setAttribute('style', 'white-space: pre;');
    if(prix >= 500)
    {
        port = 0;
        remise = 10;
        prixtot = prix *0.9;
        alert(prixtot);
    }
    else{
        port = prix*0.02;
        
        if(port<6)
        {
            port = 6;
        }
        if(prix>=100 && prix <=200)
        {
            remise = 5;
            prixtot = (prix*0.95)+port; 
        }
        if(prix>=200 && prix <500)
        {
            remise = 10;
            prixtot = (prix*0.90)+port;
        }
        else{
            remise = 0;
            prixtot = prix+port;
        }
    }
    rep.textContent = ' Prix unitaire : '+prixunitaire+' euros \r\n ';
    rep.textContent += 'Quantitee desirer: '+qtecom+' .\r\n ';
    rep.textContent += 'Frais de port : '+port+' euros .\r\n ';
    rep.textContent += 'Remise: '+remise+' %  \r\n ';
    rep.textContent += 'Prix total: '+prixtot+' euros';
    div.append(rep);
    setTimeout(function(){div.removeChild(rep);},7000);
}

// 15 * 24 = 360; 360 * 2% = 7.2, total avec remise = 324 + port = 331.2

function exo2(nombre)
{
    let div =  document.getElementById('contentexo');
    let rep = document.createElement('p');
    let tab =[];
    if(nombre>0){
        let somme=0;
        for(let i = 1; i<nombre; i++)
        {
            
            tab.push(i);
            console.log(tab);
            somme+=i;
        }
        rep.textContent = tab.join("+")+' = '+somme; 
        div.append(rep);
        setTimeout(function(){div.removeChild(rep);},7000);
    }
}

function exo3()
{
    let nombre = 1;
    let tab = [];
    let min;
    let max;
    let div =  document.getElementById('contentexo');
    let rep = document.createElement('p');
    rep.setAttribute('style', 'white-space: pre;');
    for (let i = 1; nombre!=0; i++)
    {
        nombre = parseInt(prompt("Saisir le nombre : "+i+"\r\ Ecrire 0 ou appuyer sur annuler pour arreter"));
        if(nombre >0 && nombre != "undefined")
        {
        tab.push(nombre);
        }
        else
        {
            break;
        }
    }
    console.log(tab.length);
    if(tab.length>=2)
    {
    min = Math.min.apply(Math,tab);
    max = Math.max.apply(Math,tab);
    rep.textContent = 'Vous avez saisies les nombre suivants : '+tab.join("-")+"\r\n";
    rep.textContent += 'Le nombre minimum saisie est: ' +min+'\r\n';
    rep.textContent += 'Le nombre maximum saisie est: '+max;
    div.append(rep);
    setTimeout(function(){div.removeChild(rep);},7000);
    }
    else
    {
      let reco = confirm("Vous n'avez pas saisie asser de nombres .\r\ Voulez-vous recommencer ?");
        
        if(reco == true)
        {
            exo3();
        }  
    }
    
    
}

function exo4()
{
   
   
   let jeune=0;
   let moyen = 0;
   let vieux=0;
   let tab= [];
   let div =  document.getElementById('contentexo');
    let rep = document.createElement('p');
    rep.setAttribute('style', 'white-space: pre; ');
    let age=1;
        for (let i=1; age <100; i++)
        {
            if(age>0 && age <100)
            {
            age = prompt("Entrer l'age de la personne : "+i);
            tab.push(age);
            }
            else
            {
                break;
            }
        }
    
    if (age > 0)
    {
        
        for (let y=0; y<tab.length; y++)
        {
            if(tab[y]<20)
            {
              jeune+=1;  
            }
            if(tab[y]>40)
            {
                vieux+=1;
            }
            if(tab[y]>=20 && tab[y]<=40)
            {
                moyen+=1;
            }
        }
        console.log(tab.join("-"));
        rep.textContent = 'Il y a : \r\n';
        rep.textContent += jeune+ " personne de moins de 20 ans.\r\n";
        rep.textContent += moyen + " personne entre 20 et 40 ans.\r\n";
        rep.textContent += vieux + " personne de plus de 40 ans.\r\n";
        div.append(rep);
        setTimeout(function(){div.removeChild(rep);},7000);
        
    }
    else{
        
        let reco = confirm("Vous avez pas saisi un age valide.\r\ Voulez-vous recommencer ?");
        
        if(reco == true)
        {
            exo4();
        }
    }
}

function exo5(nombre)
{
    let div =  document.getElementById('contentexo');
    let rep = document.createElement('p');
    rep.setAttribute('style', 'white-space: pre;text-align:left;');
    for(let i=1; i<=10; i++)
    {
        
        let produit = i * nombre;
        //console.log(produit);
        rep.textContent+= nombre+" x "+i+ " = "+produit+ "\r\n";
    }
    div.append(rep);
    setTimeout(function(){div.removeChild(rep);},7000);
    
}

function exo6(prenom)
{
   let div =  document.getElementById('contentexo');
    let rep = document.createElement('p');
    rep.setAttribute('style', 'white-space: pre;text-align:left;');
    let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"]; 
    let res = tab.includes(prenom);
    if(res == true)
    {
        let index = tab.indexOf(prenom);
        tab.push(' ');
        rep.textContent = "le prenom "+ prenom +" a été trouver et effacer dans le tableau \r\n";
        tab.splice(index,1);
        tab.push(' ');
        rep.textContent += "Tableau fin: \r\n";
        rep.textContent += tab.join("-");
       
    }
    else
    {
        rep.textContent = "Le prenom "+prenom+ " n'a pas été trouver dans le tableau";
    }
     div.append(rep);
        setTimeout(function(){div.removeChild(rep);},7000);
    
}


function supp(nombre)
{
    let div = document.getElementById("contentexo");
    
    if(div !== null)
    {
        while (div.firstChild)
        {
            div.removeChild(div.firstChild);
        }
    }
   
   AfficherMasquer(nombre);
}

function insertAttr(elem,attrs)
{
    for(var key in attrs) {
    elem.setAttribute(key, attrs[key]);
  }
    
}



