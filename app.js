const inquirer= require('inquirer');

const promptUser= () => {
    return inquirer.prompt
        ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => 
                    {
                        if (nameInput)
                        {
                            return true;
                        }

                        else
                        {
                            console.log('Please enter your name!')
                            return false;
                        }
                    }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username'
            },
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself'
            }
        ]);
    };
    
const promptProject= portfolioData => 
{
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects)
    {
        portfolioData.projects= [];
    }
    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },        
        
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project (Required)'
        },
        
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter anouther project?',
            default: false
        }

    ]).then(projectData => 
        {
            portfolioData.projects.push(projectData);
            
            if (projectData.confirmAddProject)
            {
                return promptProject(portfolioData);
            }
            
            else
            {
                return portfolioData;
            }
        });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });

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