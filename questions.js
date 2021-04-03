module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'What is your name?',
	},
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of the project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please provide a summary of the project.',
	},
  	{
    	type: 'input',
    	name: 'usage',
    	message: 'What is the deployed link of your project? (Must put https:// in it)',
  	},
	{
		type: 'input',
		name: 'installation',
		message: 'Please provide instructions on how to run your specific project.',
	},
	{
		type: 'input',
		name: 'contribution',
		message: 'Share instructions on how others can contribute to your project.',
	},
  	{
    	type: 'input',
    	name: 'tests',
    	message: 'Please provide some of the tests you ran for your project.',
  	},
	{
		type: 'input',
		name: 'github',
		message: 'What is your github URL? (Please put https:// in it)',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email address?',
	},
	{
		name: 'license',
		type: 'checkbox',
		message: 'Select a License',
		choices: [
		  'Apache License 2.0',
		  'GNU GPLv3',
		  'IBM',
		  'MIT',
		  'Mozilla Public License 2.0',
		  'The zlib/libpng License',
		],
	  },
];