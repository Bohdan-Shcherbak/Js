function explode(s) {
    s = s.split('')
    // console.log(s);
    let newstr = '';
    // console.log(newstr);
    for (let i = 0; i < s.length; i++) {
      newstr += s[i].repeat(s[i])
      //  console.log(r);
       
      //  console.log(newstr);
    }
      return newstr;
    }

    function explode(s) {
        return s.split("").map((e) => e.repeat(+e)).join("");
      }