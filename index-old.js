const http = require('http');
const { stringify } = require('querystring');

http.createServer((req, res) => {
    
    console.log(req);

   // Formato JSON
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    const user = {
        id: 123,
        name: 'Johana'
    }
    
    res.write(JSON.stringify(user));
    

    //Formato EXCEL esto nos da en la web un archivo para descagar
    /*
    res.setHeader('Content-Disposition', 'attachement; filename=usuarios.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'});
    //res.write('id,name\n123,Johana\n456,Marta'); 
    res.write('id,name\n');
    res.write('123,Johana\n');
    res.write('456,Marta'); 
    */
    res.end();

}).listen(3000);


