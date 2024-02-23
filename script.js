//Creo las variables
let anterior = document.getElementById('imagenanteror')
let imagen = document.getElementById('BullDogFrances');
let siguiente = document.getElementById('pasarimagen');
let texto = document.getElementById('info')

//Realizo la Funcion 
siguiente.onclick = function(){
    if (siguiente == false);{
        imagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8irXC-zKnkjYrhgq-ppXnD5C0T8zlvMiG6Q&usqp=CAU'
   
}

    
    siguiente = false
    if (siguiente == false);{
        imagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbwnYZ8gJd2XaMwNzp3Eqmvt2ObqEr0OKdw&usqp=CAU'
    
}
siguiente = true



siguiente = false
  if (siguiente == false);{
       imagen.src('https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Bulldog_franc%C3%A9s_fawn.jpg/220px-Bulldog_franc%C3%A9s_fawn.jpg')
        siguiente = true
    }

   siguiente = false
   if (siguiente == false);{
    imagen.src('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYQAIAastEsKfYfmjUJAjMGPLTMaX9XESug&usqp=CAU')
     siguiente = true
 }
}

/*

let img1nintendo = document.querySelector('#nintendoimg1')
let boton2 = document.querySelector('#nintendobtn')
let imagenCambiada2 = false;
boton2.onclick = function(){
    if (imagenCambiada2 == false){
        img1nintendo.src = 'https://th.bing.com/th/id/OIP.h6mUGY6quvM1iIHIXqyuVwHaEO?w=302&h=180&c=7&r=0&o=5&pid=1.7'
        imagenCambiada2 = true
    } else {
        img1nintendo.src = 'https://th.bing.com/th/id/OIP.LkBNHJMLIBmi0RzN6WLL1wHaFD?w=192&h=181&c=7&r=0&o=5&pid=1.7'
   
    imagenCambiada2 = false
    
    }
}*/