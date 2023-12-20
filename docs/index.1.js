
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>MyAgenda</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"/lib/icons/book.jpg\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/xcomponents/xcomponents.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/components/common/styles/all.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/xcomponents/xcomponents.js\"></script>\n    <script src=\"lib/components/TopBar/TopBar.js\"></script>\n    <script src=\"lib/components/TopBarSpace/TopBarSpace.js\"></script>\n    <script src=\"lib/components/BottomBar/BottomBar.js\"></script>\n    <script src=\"lib/components/NavigationBar/NavigationBar.js\"></script>\n    <style>\n      * {\n        font-family: Arial;\n      }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    Página de inicio."
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <TopBar />"
 + "    <TopBarSpace />"
 + "    <NavigationBar />"
 + "    <div>"
 + "      <router-view :root=\"this\"></router-view>"
 + "    </div>"
 + "    <BottomBar />"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");