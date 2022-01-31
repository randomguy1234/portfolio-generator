//inport inquirer package from npm, import writefile/copyfile, generatepage from other js files
const { writeFile, copyFile }= require('./utils/generate-site.js')
const generatePage= require('./src/page-template.js');
const inquirer= require('inquirer');

//ask the user questions using command line
const promptUser= () => {
    return inquirer.prompt
        ([
            //name of person
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
            
            //github username
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username (Required)',
                validate: githubInput =>
                    {
                        if (githubInput)
                        {
                            return true;
                        }

                        else
                        {
                            console.log('Please enter your github username!')
                            return false;
                        }
                    }
            },

            //confirmation to add personal info
            {
                type: 'confirm',
                name: 'confirmAbout',
                message: 'Would you like to enter some information about yourself for an "About" section?',
                default: true
            },
            
            //self description
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself',
                when: ({confirmAbout}) =>
                    {
                        if (confirmAbout)
                        {
                            return true;
                        }

                        else
                        {
                            return false;
                        }
                    }
            }
        ]);
    };
    
//ask user about project info through command line     
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
        //name of the project
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectNameInput => 
            {
                //check if name is entered, if not then ask user to enter info
                if (projectNameInput)
                {
                    return true;
                }

                else
                {
                    console.log('Please enter your project name!')
                    return false;
                }
            }
        },
        
        //description of the project
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescriptionInput =>
                {
                    //check if description is entered, if not then ask user to enter info
                    if (projectDescriptionInput)
                    {
                        return true;
                    }

                    else
                    {
                        console.log('Please enter your project description!')
                        return false;
                    }
                }
        },
        
        //languages used for the project
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },        
        
        //github link to the repository of the project
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project (Required)',
            validate: githubLinkInput =>
                {
                    //check if link is entered, if not then ask user to enter info
                    if (githubLinkInput)
                    {
                        return true;
                    }

                    else
                    {
                        console.log('Please enter your github link!')
                        return false;
                    }
                }
        },
        
        //confirmation for making the project featured
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        
        //confirmation to add additional projects
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }

    ]).then(projectData => 
        {
            //save answers to array
            portfolioData.projects.push(projectData);
            
            if (projectData.confirmAddProject)
            {
                //do another prompt if user wants to add more projects
                return promptProject(portfolioData);
            }
            
            else
            {
                return portfolioData;
            }
        });
};

//function call
promptUser()
    .then(promptProject)
    .then(portfolioData =>
        {
            return generatePage(portfolioData);
        })
    .then(pageHTML => 
        {
            return writeFile(pageHTML);
        })
    .then(writeFileResponse =>
        {
            console.log(writeFileResponse);
            return copyFile();
        })
    .then(copyFileResponse =>
        {
            console.log(copyFileResponse);
        })
    .catch(err =>
        {
            console.log(err);
        });
        
        //below was commited out to make code more readable
        /*{
            //console.log(portfolioData);

            const pageHTML= generatePage(portfolioData);
            
            fs.writeFile('./dist/index.html', pageHTML, err => 
            {
                if (err) 
                {
                    console.log(err);
                    return;
                }

                //console.log('Page created! Check out index.html in this directory to see it!');
            });

            fs.copyFile('./src/style.css', './dist/style.css', err =>
            {
                if (err)
                {
                    console.log(err);
                    return;
                }
                console.log('Style sheet copied successfully!');
            });
        });*/

