const inquirer= require('inquirer');

inquirer
    .prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers=> console.log(answers));
/*const fs= require('fs');
const generatePage= require('./src/page-template.js');


//const profileDataArgs= process.argv.slice(2);
//const [name, github]= profileDataArgs;
const pageHTML= generatePage(name, github);


fs.writeFile('./index.html', pageHTML, err => 
{
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});*/


//console.log(name, github);
//console.log(genetatePage(name, github)); 
/*{console.log(profileDataArgs);}

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData= profileDataArr => 
{
    // This...
    for (let i= 0;i < profileDataArr.length; i++)
    {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    // Is the same as this...
    profileDataArr.forEach(profileItem=> console.log(profileItem));
    
};

printProfileData(profileDataArgs);*/