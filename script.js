fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => displayUser(json))

    function displayUser(users){
     const userNames = users.map(user => user.name);
     const ul = document.getElementById('container-information');
     
     for (let i = 0 ; i< userNames.length; i++){
         
               const username = userNames[i];
               const li = document.createElement('li');
               li.innerText="Full Name : "+ username ; 
                 ul.appendChild(li);
         
     

    }
     

    }