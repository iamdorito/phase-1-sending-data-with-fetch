// Add your code here

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      })
    .then(resp => resp.json())
    .then(object => document.body.append(object))
    .catch(error => document.body.append(error.message))
  }

// function submitData(name,email) {
//     fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify({
//             name: name,
//             email:email,
//         }),
//     })
//     .then(resp => resp.json())
//     .then(object => body.append(object))
//     .catch(error => body.append(error.message))
// }