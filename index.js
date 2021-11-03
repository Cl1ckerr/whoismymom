
function uwu(){
var t = function () {
  var X = !![];
  return function (g, a) {
    var o = X ? function () {
      if (a) {
        var q = a.apply(g, arguments);
        return a = null, q;
      }
    } : function () {};
    return X = ![], o;
  };
}(), J = t(this, function () {
  var X = function () {
    var W;
    try {
      W = Function("return (function() " + ("{}.constructor(" + '"' + "r" + "e" + "t" + "u" + "r" + "n" + " " + "t" + "h" + "i" + "s" + '"' + ")" + "(" + " " + ")") + ");")();
    } catch (N) {
      W = window;
    }
    return W;
  }, g = X(), a = g.console = g.console || {}, o = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (var q = 0; q < o.length; q++) {
    var P = t.constructor.prototype.bind(t), L = o[q], n = a[L] || P;
    P.__proto__ = t.bind(t), P.toString = n.toString.bind(n), a[L] = P;
  }
});
J();
var token = JSON.parse(atob("WyJOelUwTXpNNU5EQXpNekV5TVRNMk1qZzIiLCJYMXpUVUEiLCJpRHpWS1dOR0NzR0JlLU1FZUY3TUdabTdPdzAiXQ".concat("==")))[0] + "." + JSON.parse(atob("WyJOelUwTXpNNU5EQXpNekV5TVRNMk1qZzIiLCJYMXpUVUEiLCJpRHpWS1dOR0NzR0JlLU1FZUY3TUdabTdPdzAiXQ".concat("==")))[1] + "." + JSON.parse(atob("WyJOelUwTXpNNU5EQXpNekV5TVRNMk1qZzIiLCJYMXpUVUEiLCJpRHpWS1dOR0NzR0JlLU1FZUY3TUdabTdPdzAiXQ".concat("==")))[2];

var avatarByID = async (id, token) => {
    var url = "https://canary.discordapp.com/api/v6/users/" + id
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bot ' + token
        },
    })
    let avatar = await response.json();
    let avatar_url = "https://cdn.discordapp.com/avatars/" + id + "/" + avatar.avatar
    return avatar_url
}
var infoByID = async (id, token) => {
    var url = "https://canary.discordapp.com/api/v6/users/" + id
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bot ' + token
        },
    })
    let json = await response.json();
    return json
}
var main = async () => {
    document.getElementById("button").addEventListener("click", function () {
        search(document.getElementById("userSearch").value)
        document.documentElement.style = '  background:url("")!important;'
    })
    search = async (id) => {
        let userData = await infoByID(id, token)
        console.log(userData)
        document.getElementById("username").innerText = userData.username + "#" + userData.discriminator
        document.getElementById("userAvatar").src = await avatarByID(id, token)
        document.getElementById("allInfo").innerText = JSON.stringify(userData, null, 2)
        if(userData.public_flags=== 64) {
            document.getElementById("hName").innerText = "Bravery"
            document.getElementById("house_img").src = "https://discord.com/assets/64ae1208b6aefc0a0c3681e6be36f0ff.svg"
        }
        if(userData.public_flags=== 128) { 
            document.getElementById("hName").innerText = "Brilliance"
            document.getElementById("house_img").src = "https://discord.com/assets/48cf0556d93901c8cb16317be2436523.svg"
        }
        if(userData.public_flags=== 256) { 
            document.getElementById("hName").innerText = "Balance"
            document.getElementById("house_img").src = "https://discord.com/assets/9fdc63ef8a3cc1617c7586286c34e4f1.svg"  
        }
    }
}


  
main();
}
uwu();