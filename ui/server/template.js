import serialize from 'serialize-javascript';
export default function template(body, data) {
  
  return `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--react terminologies api-->
    <title>React App with a server and seperate jsx file</title>
    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
    <style>
      .panel-title a {
        display: block;
        width: 100%;
        cursor: pointer;
      }
      table.table-hover tr {
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <div id="contents">${body}</div>
    <script>window._INITIAL_DATA_ = ${serialize(data)}</script>
    <script src="/env.js"></script>
    <script src="/app.bundle.js"></script>
    <script src="/vendor.bundle.js"></script>
   
    
  </body>
</html>
`;
}
