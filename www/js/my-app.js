
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
       {
      path: '/onibus/',
      url: 'paginas/onibus.html',
    },
         {
      path: '/pontos/',
      url: 'paginas/pontos.html',
    },
         {
      path: '/info/',
      url: 'paginas/info.html',
    },
      
               {
      path: '/pesquisa/',
      url: 'paginas/pesquisa.html',
    },
      
          // linhas de ônibus
         {
      path: '/linha1/',
      url: 'paginas/linhas/linha1.html',
    },
           {
      path: '/linha2/',
      url: 'paginas/linhas/linha2.html',
    },
           {
      path: '/linha3/',
      url: 'paginas/linhas/linha3.html',
    },
           {
      path: '/linha4/',
      url: 'paginas/linhas/linha4.html',
    },
           {
      path: '/linha5/',
      url: 'paginas/linhas/linha5.html',
    },
           {
      path: '/linha6/',
      url: 'paginas/linhas/linha6.html',
    },
           {
      path: '/linha7/',
      url: 'paginas/linhas/linha7.html',
    },
           {
      path: '/linha8/',
      url: 'paginas/linhas/linha8.html',
    },
           {
      path: '/linha9/',
      url: 'paginas/linhas/linha9.html',
    },
           {
      path: '/linha10/',
      url: 'paginas/linhas/linha10.html',
    },
      
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');



var searchbar = app.searchbar.enable('.searchbar-expandable');



