const signUpButton = document.getElementById('signUp-btn');
const signInButton = document.getElementById('signIn-btn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const registerTeacher = document.getElementById('register-teacher');
const registerStudent = document.getElementById('register-student');
const loginTeacher = document.getElementById('login-teacher');
const loginStudent = document.getElementById('login-student');

let registerTeacherActive, registerStudentActive, loginTeacherActive, loginStudentActive;
registerTeacherActive = registerStudentActive = loginTeacherActive = loginTeacherActive = false;

registerTeacher.addEventListener('click', () => {
	registerTeacher.classList.toggle("active");
	registerStudent.classList.remove("active");
	registerTeacherActive = !registerTeacherActive;
	registerStudentActive = false;
});

registerStudent.addEventListener('click', () => {
	registerTeacher.classList.remove("active");
	registerStudent.classList.toggle("active");
	registerTeacherActive = false;
	registerStudentActive = !registerStudentActive;
});

loginTeacher.addEventListener('click', () => {
	loginTeacher.classList.toggle("active");
	loginStudent.classList.remove("active");
	loginTeacherActive = !loginTeacherActive;
	loginStudentActive = false;
});

loginStudent.addEventListener('click', () => {
	loginTeacher.classList.remove("active");
	loginStudent.classList.toggle("active");
	loginTeacherActive = false;
	loginStudentActive = !loginStudentActive;
});

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', loginUser);
registerForm.addEventListener('submit', registerUser);

async function loginUser(event) {
	event.preventDefault();

	try {
		let userData = await checkLoginData($('#login-email').val(), $('#login-password').val());
		console.log(userData);
		$('#login-msg').css("color", "green").text('login successful');
	} catch(err) {
		$('#login-msg').css("color", "red").text(err);
		console.log(err);
	}
}

function checkLoginData(email, password) {
	return new Promise((resolve, reject) => {

		if(!loginTeacherActive && !loginStudentActive)	reject('Please select designation');
		if(!email.length)		reject('Please provide email');
		if(!password.length)	reject('Please enter password');

		resolve({
			email, 
			password, 
			designation: (loginTeacherActive ? 'teacher' : 'student')
		});
	});
}

async function registerUser(event) {
	event.preventDefault();

	try {
		let userData = await checkRegisterData($('#register-regno').val(), $('#register-email').val(), $('#register-password').val(), $('#register-branch').val());
		console.log(userData);
		$('#register-msg').css("color", "green").text('registration successful, kindly login');
	} catch (err) {
		$('#register-msg').css("color", "red").text(err);
		console.log(err);
	}
}

function checkRegisterData(regno, email, password, branch) {
	
	return new Promise((resolve, reject) => {
		if(!registerTeacherActive && !registerStudentActive)	reject('Please select designation');
		if(!regno.length)		reject('Please provide university id');
		if(!email.length)		reject('Please provide email');
		if(!password.length)	reject('Please enter password');
		if(!branch)		reject('Please provide branch');

		resolve({
			regno,
			email,
			password,
			branch,
			designation: (loginTeacherActive ? 'teacher' : 'student')
		});

	});
}

const route = (window.location.href).slice(0,-1);
$('#register-btn').attr('action', route.concat('/register'));
$('#login-btn').attr('action', route.concat('/login'));