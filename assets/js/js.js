

function AfficherMasquer(nombre)
{
    let div =  document.getElementById('contentexo');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let h3 = document.getElementById('titre');
    //console.log(nombre);
    //console.log(div);
    if(div.childElementCount == 0)
    {
       if(nombre==1)
       {        
                
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
                div.append(h3,label,document.createElement('br'),input,document.createElement('br'),label2,document.createElement('br'),input2,document.createElement('br'),button); 
        }
        if(nombre==2)
        {
            console.log("salut");
                    let label2 = document.createElement('label');
                    let input2 = document.createElement('input');
                    let button = document.createElement('input');
                 h3.innerHTML = "Somme des entiers inferieurs a N";
                 label2.for='nombre';
                 label2.textContent= 'Indiquer votre nombre';
                 insertAttr(input2,{'type':'text','id':'nombre','name':'nombre'});
                 insertAttr(button,{'type':'button','value':'valider'});
                 button.onclick = function(){
                     exo2(input.value);
                 };
                 div.append(h3,label2,document.createElement('br'),input2,document.createElement('br'),button);

        }
        if(nombre==3)
        {
            exo3();
        }
        if(nombre==4)
        {
            exo4();
        }        
        if(nombre==5)
        {
            exo5();
        }
        if(nombre==6)
                {
                    exo6();
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
    
}

// 15 * 24 = 360; 360 * 2% = 7.2, total avec remise = 324 + port = 331.2

function exo2(nombre)
{
    let div =  document.getElementById('content');
    let rep = document.createElement('p');
    let tab =[nombre];
    if(nombre>0){
        let somme=0;
        for(let i = 1; i<=nombre; i++)
        {
            tab.push(i);
            somme+=i;
        }
        rep.textContent = tab.join("+")+' = '+somme; 
        div.append(rep);
    }
}

function exo3()
{
    alert("exo3");
}

function exo4()
{
    alert("exo4");
}

function exo5()
{
    alert("exo5");
}

function exo6()
{
    alert("exo6");
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



