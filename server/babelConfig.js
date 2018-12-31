require("babel-register");

require("babel-register")({
    ignore:[/node_modules/],
    presets:[
        'react',
        'stage-0',
        ['env',{targets:{browser:['last 2 versions']}}]
    ],
    plugins:[
        'syntax-dynamic-import',
        'dynamic-import-node',
        'react-loadable/babel'
    ]
    
  });

  require('../index');