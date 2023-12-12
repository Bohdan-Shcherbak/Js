// задача определить колличество людей по рукопожатиям
function getParticipants(handshakes){
    let Participants = 0;
    let result = 2
    if(handshakes == 0){
      return 0
    } else if(handshakes == 1){
      return 2
    } else{
      for(let i = 2; i<=handshakes;){
        let resultold = result
        result = result +1
        // let rar
        // console.log(result);
        // Participants = Participants + result
        // console.log(Participants);
      i = i + resultold
      console.log(i);
    }
  }
  return result
  }

// function getParticipants(handshakes){
//     let x = handshakes
//   let participants = 0
//   while (x > 0) {
//       x = x - participants
//       console.log(x);
//       participants++
//   }
//   return participants
// }

// function getParticipants(handshakes){
//     let accum = 0
//     let count = 1
//     while(handshakes > accum){
//         accum += count - 1
//         console.log(accum);
//         count++
//     } 
//     return count-1
// }

function getParticipants(h){
    if(h === 0) return 0;
    for(var i=0,k=1;i<h;i+=k++);
    console.log(k);
    // console.log(i);
    return k;
  }

  const getParticipants = n => 1 + Math.ceil((-1 + Math.sqrt(1 + 8 * n)) / 2);
  
  function getParticipants(handshakes){
    if (handshakes === 0) return 0;
    return Math.ceil( (1 + Math.sqrt(8 * handshakes + 1)) / 2 ); 
  }

  const getParticipants = handshakes => handshakes > 0 ? Math.ceil( ( 1 + (1 + 8 * handshakes)**0.5) / 2 ) : 1

  function getParticipants(handshakes){
    let farmers = 0
    while(handshakes > farmers * (farmers - 1) / 2){
      farmers++
    }
    return farmers
  }
console.log(getParticipants(22));